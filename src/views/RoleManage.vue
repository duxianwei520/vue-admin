<template>
  <div class="about">
    <h1>角色管理</h1>
    <div id="container"></div>
  </div>
</template>
<script>
import G6 from '@antv/g6'
import insertCss from 'insert-css'
insertCss(`
  .g6-tooltip {
    border-radius: 6px;
    font-size: 12px;
    color: #fff;
    background-color: #000;
    padding: 2px 8px;
    text-align: center;
    max-width: 300px;
    word-break: break-all;
  }
`)

export default {
  name: 'roleManage',
  data: function () {
    return {}
  },
  mounted() {
    const data = {
      nodes: [
        {
          id: '1',
          dataType: 'SOURCE',
          name: 'SOURCE',
          conf: [
            {
              label: 'con11sf',
              value:
                'pai_graph.confpai_graph.confpai_graph.confpai_graph.confpai_graph.confpai_graph.conf',
            },
          ],
        },
        {
          id: '2',
          dataType: 'SELECT',
          name: 'SELECT',
          conf: [
            {
              label: 'conf',
              value: 'pai_graph.conf',
            },
          ],
        },
        {
          id: '3',
          dataType: 'GROUP',
          name: 'GROUP',
          conf: [
            {
              label: 'conf',
              value: 'pai_graph.conf',
            },
          ],
        },
        {
          id: '4',
          dataType: 'SELECT',
          name: 'SELECT',
          conf: [
            {
              label: 'conf',
              value: 'pai_graph.conf',
            },
          ],
        },
        {
          id: '5',
          dataType: 'GROUP',
          name: 'GROUP',
          conf: [
            {
              label: 'conf',
              value: 'pai_graph.conf',
            },
          ],
        },
        {
          id: '6',
          dataType: 'SINK',
          name: 'SINK',
          conf: [
            {
              label: 'conf',
              value: 'pai_graph.conf',
            },
          ],
        },
        {
          id: '7',
          dataType: 'SELECT',
          name: 'SELECT',
          conf: [
            {
              label: 'conf',
              value: 'pai_graph.conf',
            },
          ],
        },
        {
          id: '8',
          dataType: 'FLINK',
          name: 'FLINK',
          conf: [
            {
              label: 'conf',
              value: 'pai_graph.conf',
            },
          ],
        },
        {
          id: '9',
          dataType: 'FJOINJOINLINK',
          name: 'FJOINJOINLINK',
          conf: [
            {
              label: 'conf',
              value: 'pai_graph.conf',
            },
          ],
        },
      ],
      edges: [
        {
          source: '1',
          target: '3',
        },
        {
          source: '3',
          target: '2',
        },
        {
          source: '1',
          target: '5',
        },
        {
          source: '5',
          target: '4',
        },
        {
          source: '2',
          target: '9',
        },
        {
          source: '4',
          target: '9',
        },
        {
          source: '9',
          target: '8',
        },
        {
          source: '8',
          target: '7',
        },
        {
          source: '7',
          target: '6',
        },
      ],
    }

    G6.registerNode(
      'sql',
      {
        drawShape(cfg, group) {
          const rect = group.addShape('rect', {
            attrs: {
              x: -75,
              y: -25,
              width: 150,
              height: 50,
              radius: 10,
              stroke: '#5B8FF9',
              fill: '#C6E5FF',
              lineWidth: 3,
            },
            name: 'rect-shape',
          })
          if (cfg.name) {
            group.addShape('text', {
              attrs: {
                text: cfg.name,
                x: 0,
                y: 0,
                fill: '#00287E',
                fontSize: 14,
                textAlign: 'center',
                textBaseline: 'middle',
                fontWeight: 'bold',
              },
              name: 'text-shape',
            })
          }
          return rect
        },
      },
      'single-node'
    )

    const container = document.getElementById('container')
    const width = container.scrollWidth
    const height = container.scrollHeight || 500
    const graph = new G6.Graph({
      container: 'container',
      width,
      height,
      layout: {
        type: 'dagre',
        // nodesepFunc: (d) => {
        //   if (d.id === '3') {
        //     return 500;
        //   }
        //   return 50;
        // },
        ranksep: 70,
        nodesep: 70, // 可选
        controlPoints: true,
      },
      defaultNode: {
        type: 'sql',
      },
      defaultEdge: {
        type: 'line',
        style: {
          radius: 20,
          offset: 45,
          endArrow: true,
          lineWidth: 2,
          stroke: '#C2C8D5',
        },
      },
      nodeStateStyles: {
        selected: {
          stroke: '#d9d9d9',
          fill: '#5394ef',
        },
      },
      modes: {
        default: [
          'drag-canvas',
          'zoom-canvas',
          'click-select',
          {
            type: 'tooltip',
            formatText(model) {
              const cfg = model.conf
              const text = []
              cfg.forEach((row) => {
                text.push(row.value)
              })
              return text.join('\n')
            },
            offset: 100,
          },
        ],
      },
      fitView: true,
    })
    graph.data(data)
    graph.render()

    if (typeof window !== 'undefined') {
      window.onresize = () => {
        if (!graph || graph.get('destroyed')) return
        if (!container || !container.scrollWidth || !container.scrollHeight)
          return
        graph.changeSize(container.scrollWidth, container.scrollHeight)
      }
    }
  },
}
</script>
