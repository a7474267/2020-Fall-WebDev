<template>
  <div class="container">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item">
          <a class="page-link"
             href="#"
             aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"
            v-for="page in totalPage"
            :key="page">
          <a class="page-link"
             href="#">
            {{ page }}
          </a>
        </li>
        <li class="page-item">
          <a class="page-link"
             href="#"
             aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Array,
      required: true,
    },
  },
};
</script>
