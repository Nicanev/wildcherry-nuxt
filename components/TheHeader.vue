<script setup>
import { useCatalogStore } from "~~/stores/CatalogStore";
const catalogStore = useCatalogStore();
</script>
<template lang="pug">
header.header
  .header__content
    .header__upmenu
      .header__container
        .header__city
          img(src="../assets/img/icons/Location.svg", alt="City icon")
          a(href="#") Астрахань
        .header__phone +7 (695) 556-36-54
    .header__downmenu
      .header__container
        .header__burger.for-mobile
          img(src="../assets/img/icons/burger.svg", alt="Burger")
        .header__logo
          a(href="#")
            img(src="../assets/img/Logo.svg", alt="Logo")
        .header__catalog
          button.btn(@click="catalogStore.openCatalog()")
            span
              img(src="../assets/img/icons/Catalog.svg", alt="Catalog", v-if="!catalogStore.isCatalogOpen")
              img(src="../assets/img/icons/Close.svg", alt="Close", v-if="catalogStore.isCatalogOpen")
            span Каталог
        .header__search
          input(type="text" placeholder="Искать на WildCherry..")
          nuxt-link(to="/search")
            a(href="#")
              img(src="../assets/img/icons/Loop.svg", alt="Search")
        .header__buttons
          button.btn
            img(src="../assets/img/icons/Delivery.svg", alt="Delivery")
            span Доставка
          button.btn
            img(src="../assets/img/icons/Like.svg", alt="Favourite")
            span Избранное
          button.btn
            img(src="../assets/img/icons/Cart.svg", alt="Cart")
            span Корзина
          nuxt-link(to="/login")
              button.btn
                img(src="../assets/img/icons/User.svg", alt="Profile")
                span Профиль
    .header__container
      .header__search_mobile.for-mobile
        .loop
          <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.2602 11.1429C22.2602 5.00001 17.2659 0 11.1301 0C4.99427 0 0 5.00001 0 11.1429C0 17.2857 4.99427 22.2858 11.1301 22.2858C13.7841 22.2858 16.2385 21.3429 18.1506 19.7714L23.3732 25L25 23.3713L19.7774 18.1718C21.3186 16.2574 22.2602 13.7998 22.2602 11.1429ZM11.1301 20C6.24987 20 2.2831 16.0286 2.2831 11.1429C2.2831 6.25715 6.24997 2.28572 11.1301 2.28572C16.0102 2.28572 19.9771 6.25715 19.9771 11.1429C19.9771 16.0286 16.0102 20 11.1301 20Z" fill="gray"/>
          </svg>
        input(type="text" placeholder="Искать на WildCherry..")
    transition(name="slide")
      .header__catalog-menu.catalog(v-if="catalogStore.isCatalogOpen")
        .catalog__container
          .catalog__categories
            ul
              li.catalog__category(v-on:mouseover="catalogStore.selectCatalogCategory('Electronic')")
                a(href="#") Электроника
              li.catalog__category(v-on:mouseover="catalogStore.selectCatalogCategory('Clothes')")
                a(href="#") Одежда
              li.catalog__category(v-on:mouseover="catalogStore.selectCatalogCategory('Shoes')")
                a(href="#") Обувь
              li.catalog__category(v-on:mouseover="catalogStore.selectCatalogCategory('Furniture')")
                a(href="#") Мебель
          .catalog__lists-block
            .electonics-list.catalog__list(v-if="catalogStore.currentCatalogCategory == 'Electronic'")
              .catalog__list-column
                h3
                  a(href="#")  Телефоны и смарт-часы
                ul
                  li
                    a(href="#") Смартфоны
                  li
                    a(href="#") Смарт-часы
                  li
                    a(href="#") Ассексуары
                  li
                    a(href="#") Фитнес браслеты
              .catalog__list-column
                h3
                  a(href="#")  Телефоны и смарт-часы
                ul
                  li
                    a(href="#") Смартфоны
                  li
                    a(href="#") Смарт-часы
                  li
                    a(href="#") Ассексуары
                  li
                    a(href="#") Фитнес браслеты
              .catalog__list-column
                h3
                  a(href="#")  Телефоны и смарт-часы
                ul
                  li
                    a(href="#") Смартфоны
                  li
                    a(href="#") Смарт-часы
                  li
                    a(href="#") Ассексуары
                  li
                    a(href="#") Фитнес браслеты
              .catalog__list-column
                h3
                  a(href="#")  Телефоны и смарт-часы
                ul
                  li
                    a(href="#") Смартфоны
                  li
                    a(href="#") Смарт-часы
                  li
                    a(href="#") Ассексуары
                  li
                    a(href="#") Фитнес браслеты
              .catalog__list-column
                h3
                  a(href="#")  Телефоны и смарт-часы
                ul
                  li
                    a(href="#") Смартфоны
                  li
                    a(href="#") Смарт-часы
                  li
                    a(href="#") Ассексуары
                  li
                    a(href="#") Фитнес браслеты
              .catalog__list-column
                h3
                  a(href="#")  Телефоны и смарт-часы
                ul
                  li
                    a(href="#") Смартфоны
                  li
                    a(href="#") Смарт-часы
                  li
                    a(href="#") Ассексуары
                  li
                    a(href="#") Фитнес браслеты
              .catalog__list-column
                h3
                  a(href="#")  Телефоны и смарт-часы
                ul
                  li
                    a(href="#") Смартфоны
                  li
                    a(href="#") Смарт-часы
                  li
                    a(href="#") Ассексуары
                  li
                    a(href="#") Фитнес браслеты
              .catalog__list-column
                h3
                  a(href="#")  Телефоны и смарт-часы
                ul
                  li
                    a(href="#") Смартфоны
                  li
                    a(href="#") Смарт-часы
                  li
                    a(href="#") Ассексуары
                  li
                    a(href="#") Фитнес браслеты
            .clothes-list.catalog__list(v-if="catalogStore.currentCatalogCategory == 'Clothes'")
              .catalog__list-column
                h3
                  a(href="#")  Женщинам
                ul
                  li
                    a(href="#") Футболки
                  li
                    a(href="#") Платья
                  li
                    a(href="#") Блузки
                  li
                    a(href="#") Свитера
            .shoes-list.catalog__list(v-if="catalogStore.currentCatalogCategory == 'Shoes'")
              .catalog__list-column
                h3
                  a(href="#")  Мужчинам
                ul
                  li
                    a(href="#") Ботинки
                  li
                    a(href="#") Кроссовки
                  li
                    a(href="#") Кеды
                  li
                    a(href="#") Сандалии
            .furniture-list.catalog__list(v-if="catalogStore.currentCatalogCategory == 'Furniture'")
              .catalog__list-column
                h3
                  a(href="#")  Компьютерная и офисная мебель
                ul
                  li
                    a(href="#") Компьютерные и офисные кресла
                  li
                    a(href="#") Офисные тумбы
                  li
                    a(href="#") Ортопедические стулья
                  li
                    a(href="#") Подставки для ног
</template>

<!-- <script lang="ts">
export default {
	name: "TheHeader",
	data() {
		return {
			isCatalogOpen: false,
			currentCatalogCategory: "Electronic",
		};
	},
	methods: {
		openCatalog() {
			this.isCatalogOpen = !this.isCatalogOpen;
		},
		selectCatalogCategory(category: String) {
			this.currentCatalogCategory = category;
		},
	},
};
</script> -->

<style scoped></style>
