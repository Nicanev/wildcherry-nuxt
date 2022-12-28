import { defineStore } from "pinia";

export const useCatalogStore = defineStore("catalogStore", {
	state: () => ({
		isCatalogOpen: false,
		currentCatalogCategory: "Electronic",
	}),
	actions: {
		openCatalog() {
			this.isCatalogOpen = !this.isCatalogOpen;
		},
		selectCatalogCategory(category: String) {
			this.currentCatalogCategory = category;
		},
	},
});
