export const NodeService = {
  getTreeTableNodesData() {
    return [
      {
        key: "1",
        data: {
          name: "1° Andar",
          
        },
        children: [
          {
            key: "1-1",
            data: {
              name: " 0101",
            1:'Tempo',
            10: "ocupado",
            10: 'hswshw',
            12: "Livre",
            
            },
          },
          {
            key: "1-2",
            data: {
              name: " 0102",
              1: "ocupado",
              10:"jjj"
            },
          },
          {
            key: "1-3",
            data: {
              name: " 0103",
            },
          },
          {
            key: "1-4",
            data: {
              name: " 0104",
            },
          },
        ],
      },
      {
        key: "2",
        data: {
          name: "2° Andar",
        },
        children: [
          {
            key: "2-1",
            data: {
              name: " 0101",
            },
          },
          {
            key: "2-2",
            data: {
              name: " 0102",
              1:'facim',
              10:'estrelas'
            },
          },
          {
            key: "2-3",
            data: {
              name: " 0103",
              8:'oh yeah'
            },
          },
          {
            key: "2-4",
            data: {
              name: " 0104",
            },
          },
        ],
      },
    ];
  },

  getTreeTableNodes() {
    return Promise.resolve(this.getTreeTableNodesData());
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};
