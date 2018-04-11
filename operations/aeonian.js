reuqire('aeonian').config({
  bucket: {
    localDir: './dist/',
    prefix: 'website-'
  },
  environments: {
    production: 'E2YTKR1O72BT2P',
  }
}).deploy(process.argv[2])
