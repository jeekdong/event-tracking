function eventTracking(el, options, isCapture) {
  let root = document.querySelector(el)
  if(!root) {
    throw new Error('请输入有效的选择器')
  }
  root.addEventListener(
    'click',
    e => {
      if(!Array.isArray(options)) {
        throw new Error('options请传入数组！')
      }
      for (let i = 0; i < options.length; i++) {
        // TODO: target judge
        if (document.querySelector(options[i].target).contains(e.target)) {
          if (options[i].params) {
            let params = {}
            options[i].params.forEach(item => {
              params[item] = document.querySelector(options[i].target).dataset[item]
            })
            options[i].handle(params)
          } else {
            options[i].handle()
          }
          if (isCapture && options[i].delay) {
            let start = new Date()
            while (new Date() - start < options[i].delay) {
              // do nothing
            }
          }
        }
      }
    },
    isCapture
  )
}

export default eventTracking