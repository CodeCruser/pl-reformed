<template>
  <div>
    <div class="profile-header">
      <!-- parameter icon -->
      <a href="#2" @click="() => parameterActive = !parameterActive">
        <img src="../assets/pmt_icon.svg" v-if="!parameterActive" alt="" class="parametr_icon" />
        <img src="../assets/pmt_n_icon.svg" v-else alt="" class="parametr_icon" />
      </a>
      <!-- tracking icon -->
      <a href="#" @click="() => trackingActive = !trackingActive">
        <img src="../assets/tracking_icon.svg" v-if="!trackingActive" alt="" class="tracking_icon" />
        <img src="../assets/tracking_n_icon.svg" v-else alt="" class="tracking_icon" />
      </a>
      <!-- route icon -->
      <a href="#" @click="() => routeActive = !routeActive">
        <img src="../assets/route_icon.svg" v-if="!routeActive" alt="" class="route_icon" />
        <img src="../assets/route_n_icon.svg" v-else alt="" class="route_icon" />
      </a>
      <!-- search icon -->
      <a href="#" @click="() => searchActive = !searchActive">
        <img src="../assets/search_icon.svg" v-if="!searchActive" alt="" class="search_icon" />
        <img src="../assets/search_n_icon.svg" v-else alt="" class="search_icon" />
      </a>
    </div>
    <div>
      <div v-if="searchActive">
        <search-icon @search-results="handleSearchResults"></search-icon>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import searchIcon from '@/components/searchIcon.vue';

export default {
  components: { searchIcon },
  data() {
    return {
      parameterActive: false,
      trackingActive: false,
      routeActive: false,
      searchActive: false,
    };
  },
  methods: {
    handleSearchResults(results) {
      this.searchResults = results;
    },
  },
};
</script>

<style>
</style>

  
<style>
  .profile-header {
    position: relative;
  }
  
  .search_icon,
  .route_icon,
  .tracking_icon,
  .parametr_icon {
    position: absolute;
    top: 72px;
    transition: all 0.3s ease;
  }
  
  .search_icon {
    right: 170px;
  }
  
  .route_icon {
    right: 128px;
  }
  
  .tracking_icon {
    right: 85px;
  }
  
  .parametr_icon {
    right: 43px;
  }
  
  .search_icon:hover,
  .route_icon:hover,
  .tracking_icon:hover,
  .parametr_icon:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
</style>
  