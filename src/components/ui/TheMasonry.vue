       <!-- 
       <template #default="{ item }">
       
       your code

       </template>-->

<template>
  <div class="masonry" ref="masonry" :style="{ gap: gap + 'px' }">
    <div
      class="masonry-col"
      :style="{
        width: '100%',
        maxWidth: columnsWidth + 'px',
        gap: gap + 'px',
      }"
      v-for="column in columns"
      :key="column"
    >
      <div
        class="masonry__item"
        v-for="item in columnsItems[column - 1]"
        :key="item"
      >
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Number,
    default: 1,
  },
  columnsWidth: {
    type: Number,
    default: 300,
  },
  gap: {
    type: Number,
    default: 0,
  },
});

// const columnsNumber = ref<number>(1);
const columnsItems = ref<any>([]);
// const windowWidth = ref(1920);
// делим масив на масив из колонок
async function divideByColumn() {
  let colCounter = 0;
  const result = [];

  for (let i = 0; i < props.columns; i++) {
    if (!result[i]) {
      result[i] = [];
    } else {
      break;
    }
  }

  for (let index = 0; index < props.items.length; index++) {
    const sizes = await getSize(result);

    const min = Math.min.apply(null, sizes);
    const minCol = sizes.indexOf(min);

    result[minCol].push(props.items[index]);

    if (colCounter == props.columns - 1) {
      colCounter = 0;
    } else {
      colCounter++;
    }
  }
  columnsItems.value = result;
  return result;
}

async function getSize(cols: Array<any>) {
  const sizes = [];
  for (let index = 0; index < cols.length; index++) {
    let sizesCol = [];

    for (let i = 0; i < cols[index].length; i++) {
      const img = await loadImage(cols[index][i].url);

      sizesCol.push(img.height * (props.columnsWidth / img.width));
    }

    sizes.push(sizesCol);
  }

  const result = sizes.map((col) => {
    return col.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  });

  return result;
}

function loadImage(url) {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

divideByColumn();

onMounted(() => {
  // columnsNumber.value = props.columns;
  // windowWidth.value = window.innerWidth;
  // window.addEventListener("resize", () => {
  //   windowWidth.value = window.innerWidth;
  //   if (
  //     windowWidth.value - 30 <
  //     props.columnsWidth * props.columns + props.gap * props.columns - 1
  //   ) {
  //     columnsNumber.value--;
  //   }
  // });
});
</script>

<style scoped>
.masonry {
  display: flex;
  justify-content: center;
}
.masonry-col {
  display: flex;
  flex-direction: column;
}
</style>

