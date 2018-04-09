<template lang="pug">
#Pub
  header
    .logo
      include ../static/pub.svg
    .title maximizing the value of content

  .container
    .content-blocks

      .content-block
        .content-block-title MEDIA COMPANIES
        .content-block-copy
          p License content from established creators to distribute across your owned and operated properites. 
          p License out the content you make on a daily basis to other media companies and partners. 

      .content-block.content-block-reverse
        .content-block-title CREATORS
        .content-block-copy
          p License your content directly to media companiees and platforms to know the value of your content and create incremental revenue streams.
          p Make your content avaialable for turnkey sponsorships from brands. No custom content, no brief - just the content you make on a daily basis.
        
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import '../assets/stylus/includes/*'

header
  background-color fountain-blue
  padding 60px
  color white
  .logo
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
  max-width 640px
  margin auto

.content-blocks
  display flex
  padding 40px 0
  flex-direction column

.content-block
  margin 20px 0
  display flex
  flex-direction row
  background-color white
  &.content-block-reverse
    flex-direction row-reverse
    .content-block-title
      margin-right -10%
    .content-block-copy
      margin 0 60px 0 0

.content-block-title
  background-color fountain-blue
  color white
  padding 20px 10px
  font-h1()
  white-space nowrap
  width 200px
  align-self center
  margin-left -10%

.content-block-copy
  padding 60px

</style>
