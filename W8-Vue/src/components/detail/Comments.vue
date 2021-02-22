<template>
  <ul class="row list-unstyled">
    <li class="col-md-6 mb-5"
        v-for="comment in comments"
        :key="comment.name">
      <div class="card h-100">
        <div class="media d-flex align-items-center">
          <img class="mx-3 img-cover"
               :src="comment.imgUrl"
               alt="Generic placeholder image" />
          <div class="media-body mt-2">
            <h5 class="h6 mb-2 text-primary">
              {{ comment.name }} <span class="text-muted font-size-sm">
                {{comment.create_time}}</span>
            </h5>
            <div class="d-flex align-items-center mb-2 text-star h5">
              <span class="material-icons"
                    v-for="rating in comment.rating"
                    :key="rating">star</span>
            </div>
            <p class="h6 text-primary">{{ comment.content }}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
