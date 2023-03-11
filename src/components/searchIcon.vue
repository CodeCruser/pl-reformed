<template>
    <div>
      <div>
        <label for="searchType">Search Type:</label>
        <Dropdown v-model="searchType" :options="searchTypes" optionLabel="label" />
      </div>
  
      <div v-if="searchType.value === 'address'">
        <div>
          <label for="address">Address:</label>
          <InputText v-model="address" />
        </div>
        <div>
          <label for="country">Country:</label>
          <InputText v-model="country" />
        </div>
        <div>
          <Button label="Search" @click="searchByAddress" />
        </div>
      </div>
  
      <div v-if="searchType.value === 'coordinates'">
        <div>
          <label for="latitude">Latitude:</label>
          <InputText v-model="latitude" />
        </div>
        <div>
          <label for="longitude">Longitude:</label>
          <InputText v-model="longitude" />
        </div>
        <div>
          <label for="coordinateSystem">Coordinate System:</label>
          <InputText v-model="coordinateSystem" />
        </div>
        <div>
          <Button label="Search" @click="searchByCoordinates" />
        </div>
      </div>
  
      <div v-if="searchType.value === 'poi'">
        <div>
          <label for="poiGroup">POI Group:</label>
          <InputText v-model="poiGroup" />
        </div>
        <div>
          <label for="poiName">POI Name:</label>
          <InputText v-model="poiName" />
        </div>
        <div>
          <Button label="Search" @click="searchByPOI" />
        </div>
      </div>
  
      <div v-if="searchResults.length > 0">
        <h3>Search Results:</h3>
        <DataTable :value="searchResults">
          <Column field="address" header="Address"></Column>
          <Column field="country" header="Country"></Column>
          <Column field="latitude" header="Latitude"></Column>
          <Column field="longitude" header="Longitude"></Column>
          <Column field="poiGroup" header="POI Group"></Column>
          <Column field="poiName" header="POI Name"></Column>
        </DataTable>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { InputText, Button, Dropdown, DataTable, Column } from '/primevue/components';
  
  export default {
    components: {
      InputText,
      Button,
      Dropdown,
      DataTable,
      Column,
    },
    data() {
      return {
        searchTypes: [
          { label: 'Search by Address', value: 'address' },
          { label: 'Search by Coordinates', value: 'coordinates' },
          { label: 'Search by POI', value: 'poi' },
        ],
        searchType: null,
        searchResults: [],
        address: '',
        country: '',
        latitude: '',
        longitude: '',
        coordinateSystem: '',
        poiGroup: '',
        poiName: '',
      };
    },
    methods: {
        handleSearchResults(results) {
            this.searchResults = results;
        },
        // fonction pour effectuer une recherche par adresse
        searchByAddress() {
            // envoyer une requête à l'API de recherche
            axios.get(`https://api.example.com/search?address=${this.address}&country=${this.country}`)
                .then(response => {
                    // stocker les résultats de la recherche
                    this.searchResults = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        // fonction pour effectuer une recherche par coordonnées
        searchByCoordinates() {
            // Je sais pas si on va utuliser celle-là mais pour le moment ça fonctionalité est d'envoyer une requête à l'API de recherche
            axios.get(`https://api.example.com/search?latitude=${this.latitude}&longitude=${this.longitude}&coordinateSystem=${this.coordinateSystem}`)
                .then(response => {
                    // stocker les résultats de la recherche
                    this.searchResults = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        // fonction pour effectuer une recherche par points d'intérêt
        searchByPOI() {
            // envoyer une requête à l'API de recherche
            axios.get(`https://api.example.com/search?poiGroup=${this.poiGroup}&poiName=${this.poiName}`)
                .then(response => {
                    // stocker les résultats de la recherche
                    this.searchResults = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
<style>
</style>
