/* eslint-disable linebreak-style */
<template>
  <div>
        <h1 class="title">Albums</h1>
    <div id="show-blocks">
        <div @click.prevent="isActive(block); showToggle()"
         v-rainbow v-for="block in blocks" v-bind:data-id="block.id"
         :key="block.id" :class="`single-block ${active == block.id ? 'active' : ''}`">
            <p @click.prevent="isActive(block); showToggle()">{{ block.id }}. {{ block.title }}</p>
        </div>
    </div>
       <div id="show-photos">
            <div v-if="hide" id="loader">
                <img  src="../loader.gif" alt="Loading..." />
            </div>
         <div v-for="photo in photos" :class="`photoCard`" :key="photo.id" v-bind:id="photo.id">
                <h1 class="title">Photos</h1>
                <img class=' cardImage rounded' :src="photo.thumbnailUrl">
                <p class='cardText'>{{ photo.albumId }}. {{ photo.title }}</p>
                <button  @click.prevent="modal = !modal; showModal(photo)">See Image</button>
             <div v-if="modal" :class="`modalWrapper ${active == photo.id ? 'active' : ''}`">
                <p @click.prevent="modal = !modal" class="closeBtn">X</p>
                <img class="modalImage" :src="photo.thumbnailUrl">
            </div>
        </div>
     <div :class="`shadow ${modal}`"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0,
      hide: false,
      modal: false,
    };
  },
  methods: {
    isActive(block) {
      this.active = block.id;
      this.$store.dispatch('loadPhotos', block.id);
    },
    showToggle() {
      this.hide = true;
      setTimeout(() => {
        this.hide = false;
      }, 2000);
    },
    showModal(photo) {
      this.active = photo.id;
    },
  },
  computed: {
    blocks() {
      return this.$store.state.blocks;
    },
    photos() {
      return this.$store.state.photos;
    },
  },
  mounted() {
    this.$store.dispatch('loadBlocks');
  },
};
</script>

<style lang='scss'>

h1 {
    text-align: center;
}

#show-blocks{
    margin: 0 auto;
    text-align: center;
    background: #d9e5f9;

    .title{
        text-align: center;
    }

    .single-block {
        display: inline-flex;
        padding: 20px;
        margin: 10px;
        background: snow;
        color: #fff;
        filter: brightness(70%);
        width: 9%;
        height: 100px;
        text-align: center;
        overflow: hidden;
        cursor: pointer;

        &.active {
            filter: brightness(100%);
        }
    }
}

#show-photos {
    text-align: center;
    position: relative;
    background: #d9e5f9;

    .photoCard {
        position: relative;
        display: inline-flex;
        flex-direction: column;
        margin: 20px;
        padding: 10px;
        width: 15%;
        border: 1px solid snow;
        background: rgb(156, 165, 199);
        text-align: center;
        border-radius: 20px;

        .cardImage {
            width: 100%;
            cursor: pointer;
        }

        .cardText {
            padding: 30px 5px;
            overflow: hidden;
        }

        button {
            padding: 10px;
            margin-bottom: 5px;
            background: #d9e5f9;
            font-weight: bold;
            border-radius: 20px;
            border: 1px solid lightseagreen;
            cursor: pointer;
        }

        .modalWrapper {
            position: fixed;
            display: none;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.9);
            max-width: 700px;
            width: 100%;
            z-index: 100;

            &.active {
                display: inline-block;
            }

            .modalImage {
                height: 400px;
                width: 400px;
            }

            .closeBtn {
                position: absolute;
                top: 20px;
                right: 180px;
                cursor: pointer;
                font-size: larger;
                color: red;
                border: 1px solid red;
                padding: 20px 25px;
                border-radius: 50%;
            }
        }
    }

    #loader {
        position: absolute;
        z-index: 99;
        top: 0;
        width: 100%;
        height: 100%;
        background: #d9e5f9;
        animation: fadeOut 3s;
        animation-fill-mode: forwards;

        @keyframes fadeOut {
            100% {
            opacity: 0;
            visibility: hidden;
            }
        }
    }
}

.shadow {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: none;
    background: rgba(0,0,0,0.45);

    &.true {
        display: block;
    }
}

</style>
