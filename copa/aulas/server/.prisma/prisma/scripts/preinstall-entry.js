let preinstall
try {
  preinstall = require('.prisma/prisma/preinstall/index.js.js')
} catch (e) {
  //
}
if (preinstall) {
  preinstall.main()
}
