Page({
  data: {
    banners: [
      { id: 1, url: 'assets/1.png' },
      { id: 2, url: 'assets/1.png' }
    ],
    items: [
      {
        id: 'a',
        img: 'assets/1.png',
        size: '800X2600*9mm',
        finish: '亮光 / 哑光'
      },
      {
        id: 'b',
        img: 'assets/1.png',
        size: '800X2600*15mm',
        finish: '亮光 / 哑光'
      },
      {
        id: 'a',
        img: 'assets/1.png',
        size: '800X2600*9mm',
        finish: '亮光 / 哑光'
      },
      {
        id: 'a',
        img: 'assets/1.png',
        size: '800X2600*9mm',
        finish: '亮光 / 哑光'
      },
      {
        id: 'a',
        img: 'assets/1.png',
        size: '800X2600*9mm',
        finish: '亮光 / 哑光'
      },
      {
        id: 'a',
        img: 'assets/1.png',
        size: '800X2600*9mm',
        finish: '亮光 / 哑光'
      },
    ],
    manmadeItems: [
      {
        id: '1',
        title: '高端人造大理石',
        subtitle: 'Man-made Stone',
        path: '/pages/artificial/highMarble/index'
      },
      {
        id: '2',
        title: '高仿石英石',
        subtitle: 'Quartz Stone',
        path: '/pages/artificial/fakeQuartz/index'
      },
      {
        id: '3',
        title: '正宗石英石',
        subtitle: 'Quartz Stone',
        path: '/pages/artificial/authQuartz/index'
      },
      {
        id: '4',
        title: '人造石',
        subtitle: 'Man-made Stone',
        path: '/pages/artificial/artificialStone/index'
      }
    ]
  },

  onSearchInput(e) {
    console.log('输入的关键词：', e.detail.value);
    // TODO: 调用后台搜索接口
  },

  onItemTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },
    /**
   * 点击人造石专区按钮
   */
  onManmadeTap(e) {
    const url = e.currentTarget.dataset.path;
    wx.navigateTo({ url });
  }
});
