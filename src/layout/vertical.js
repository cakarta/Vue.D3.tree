const minMargin = 9

export default {
  size (tree, size, margin, {last}) {
    tree.size([size.width - (margin.x * 2), size.height - (margin.y * 2) - last - minMargin])
  },

  transformNode (x, y) {
    return x + ',' + y
  },

  transformSvg (svg, margin) {
    return svg.attr('transform', `translate(${margin.x},${margin.y + minMargin})`)
  },

  updateTransform (transform, {x, y}) {
    return transform.translate(x, y)
  },

  getLine (d3) {
    return d3.line()
      .x(d => d.data.x)
      .y(d => d.data.y)
  },

  layoutNode (children, offset) {
    return {
      x: !children ? offset : 0,
      y: !children ? 0 : -minMargin,
      rotate: 90,
      textRotate: !children ? 0 : -90,
      anchor: !children ? 'start' : 'middle'
    }
  }
}
