       <!-- 
       <template #default="{ item }">
       
       your code

       </template>-->

<template>
  <div class="masonry" ref="masonry" :style="{ gap: gap + 'px' }">
    <div class="masonry-col" :style="{
      width: '100%',
      maxWidth: columnsWidth + 'px',
      gap: gap + 'px',
    }" v-for="column in columnsNumber" :key="column">
      <div class="masonry__item" v-for="item in columnsItems[column - 1]" :key="item">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
import { defineProps, onMounted, ref, onBeforeUnmount } from "vue";

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

const columnsNumber = ref<number>(1);
const columnsItems = ref<any>([]);
// делим масив на масив из колонок
async function divideByColumn(cols: number) {
  let colCounter = 0;
  const result = [];

  for (let i = 0; i < cols; i++) {
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

    if (colCounter == cols - 1) {
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

function masonryBreakpoints() {
  if (
    window.innerWidth <
    props.columnsWidth * columnsNumber.value +
    props.gap * (columnsNumber.value - 1)
  ) {
    columnsNumber.value--;
    masonryBreakpoints();
    return;
  } else {
    if (
      columnsNumber.value < props.columns &&
      window.innerWidth >
      props.columnsWidth * (columnsNumber.value + 1) +
      props.gap * (columnsNumber.value + 1)
    ) {
      columnsNumber.value++;
    }
    divideByColumn(columnsNumber.value);
  }
}

onMounted(() => {
  columnsNumber.value = props.columns;
  masonryBreakpoints();

  window.addEventListener("resize", masonryBreakpoints);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", masonryBreakpoints);
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

