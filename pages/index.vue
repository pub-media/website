<template lang="pug">
#Pub
  header
    .logo
      include ../static/pub.svg
    .title maximizing the value of content

  .container
    .content-blocks

      .content-block.content-block-left(v-in-viewport.once)
        .content-block-title
          .copy media companies
        .content-block-copy
          p Acquire content from established creators to distribute across your owned and operated properties. 
          p License out the content you make on a daily basis to other media companies and partners. 

      .content-block.content-block-right(v-in-viewport.once)
        .content-block-title
          .copy creators
        .content-block-copy
          p License your content directly to media companies and platforms to know the value of your content and create incremental revenue streams.
          p Make your content available to brands for sponsorship.  No custom content, no brief - just the content you make on a daily basis.

      .content-block.content-block-left(v-in-viewport.once)
        .content-block-title
          .copy brands
        .content-block-copy
          p Sponsor content from established creators and brands.
          p Get your message associated with quality content and in front of an engaged audience. 

      .content-block-highlight(v-in-viewport.once)
        .copy how pub maximizes the value of content

      .content-block.content-block-dir-col(v-in-viewport.once)
        i.fab.fa-5x.fa-youtube
        .content-block-icon-title video content
        .content-block-icon-copy produced by a creator or media company

      .content-block-group

        .content-block.content-block-dir-col(v-in-viewport.once)
          .content-block-icon
            include ../static/exc-rights.svg
          .content-block-icon-title non-exclusive
          .content-block-icon-copy content available to license multiple times to media companies and platforms

        .content-block.content-block-dir-col(v-in-viewport.once)
          .content-block-icon
            include ../static/non-exc-rights.svg
          .content-block-icon-title exclusive 
          .content-block-icon-copy content available to license exclusively to one media company or platform

        .content-block.content-block-dir-col(v-in-viewport.once)
          .content-block-icon
            include ../static/sponsorship.svg
          .content-block-icon-title sponsorship
          .content-block-icon-copy pre-made content available to brands for sponsorship on other platforms


    .cta(v-in-viewport.once)
      .copy let's work together

  .footer COPYRIGHT &copy;2018 | pub media corp
</template>

<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
}
</script>

<style lang="stylus">
@import '../assets/stylus/includes/*'
@import '../assets/stylus/viewport.styl'

header
  background-color fountain-blue
  padding 60px
  color white
  .logo
    margin auto
    width 200px
    height 100px
    margin auto
    > svg
      path, polygon
        fill white

  .title
    font-c1()
    text-align center
    padding 20px 0 0 0


.container
  max-width 720px
  margin auto

.content-blocks
  display flex
  padding 30px 0
  flex-direction column

.content-block
  position relative
  padding 30px
  margin 20px 0
  display flex
  flex-direction row
  background-color white

.content-block-title
  font-h1()
  color white
  text-align center
  text-transform uppercase
  position absolute
  background-color fountain-blue
  align-self center
  padding 20px 10px
  white-space nowrap
  width 200px
  margin-left -130px

.content-block-copy
  padding 30px
  margin 0 0 0 100px

.content-block.content-block-left
  flex-direction row
  margin-left 100px

.content-block.content-block-right
  flex-direction row-reverse
  margin-right 100px
  .content-block-title
    right -100px
  .content-block-copy
    margin 0 100px 0 0

.content-block.content-block-dir-col
  flex-direction column
  justify-content center
  align-items center

.content-block-highlight
  color white
  background-color blue-chill
  font-h1()
  text-align center
  text-transform uppercase
  padding 30px 0
  margin 20px 0

i.fab
  color blue-chill

.content-block-icon
  width 3em
  height 3em
  color blue-chill
  path, polygon, rect
    fill blue-chill

.content-block-icon-title
  text-align center
  font-h1()
  color blue-chill
  text-transform uppercase
  padding 20px 0 0 0

.content-block-icon-copy
  text-align center
  padding 10px 0 0 0


.content-block-group
  display flex
  flex-direction row
  row-gap 30px
  .content-block
    width 33%
    margin-right 30px
    &:last-child
      margin-right 0px

.cta
  width 200px
  margin auto
  text-align center
  color white
  marign auto
  background-color maya-blue
  font-h1()
  padding 10px 30px

.footer
  background-color fountain-blue
  padding 30px
  margin 60px 0 0 0
  color white
  text-align center

@import '../assets/stylus/mobile.styl'
</style>
