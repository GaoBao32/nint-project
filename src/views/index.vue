<template>
  <div>
    <!-- Index内容 -->
    <!-- 顶部标题栏 -->
    <mt-header fixed title="学前端,到达内">
      <div slot="right">
        <router-link class="link" to="/login">登录</router-link>
        &nbsp;
        <router-link class="link" to="/register">登录</router-link>
      </div>
    </mt-header>
    <!-- 顶部导航条 -->
    <mt-navbar style="margin-top: 40px" fixed v-model="selected">
      <mt-tab-item :id="item.id + ''" v-for="(item, i) in cats" :key="i">
        {{ item.category_name }}
      </mt-tab-item>
    </mt-navbar>
    <!-- 轮播图 -->
    <mt-swipe style="height: 56vw; margin-top: 89px" :speed="200" :auto="3000">
      <mt-swipe-item>
        <img src="/1.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/2.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/3.jpg" alt="" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 文章列表 -->
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="30"
      v-if="articles.length != 0"
    >
      <article-item v-for="item in articles" :key="item.id" :article="item" @click.native="$router.push('/article?id=' + item.id)">
      </article-item>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue';
export default {
  components: { ArticleItem },
  data() {
    return {
      selected: '1',
      cats: [],
      articles: [], //加载UI类别下的文章列表数据
      page: 1,
    };
  },
  mounted() {
    // 发送请求,加载文章分类的列表
    this.axios.get('/category').then((res) => {
      console.log('加载列表', res);
      this.cats = res.data.results;
    });
    // 发送请求,加载UI类别下的文章列表
    this.loadArticles(1, 1, (data) => {
      this.articles = data;
      // console.log('articles',this.articles);
      // console.log('data',data);
    });
  },
  methods: {
    // 通过cid与page查询文章列表 通过callback拿到文章列表后的逻辑
    loadArticles(cid, page, callback) {
      this.$indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle',
      });
      this.axios.get(`/articles?cid=${cid}&page=${page}`).then((res) => {
        let arts = res.data.results;
        callback(arts);
        this.$indicator.close();
      });
    },
    // 监听触底事件,加载更多文章
    loadMore() {
      console.log('到底了!');
      this.page++;
      let cid = this.selected;
      let page = this.page;
      // 发送http请求,加载下一页数据
      this.loadArticles(cid, page, (data) => {
        this.articles.push(...data);
      });
      // this.axios.get(`/articles?cid=${cid}&page=${page}`).then((res) => {
      //   console.log(res);
      //   this.articles.push(...res.data.results);
      // });
    },
  },
  watch: {
    selected(to, from) {
      // 监听顶部导航栏
      this.page = 1;
      // 初始化page=1
      console.log(to);
      // 回到顶部
      window.scrollTo(0, 0);
      // 调用loadArticles加载文章列表
      this.loadArticles(to, 1, (data) => {
        this.articles = data;
      });
    },
  },
};
</script>

<style scoped>
.link {
  color: #fff;
  text-decoration: none;
}
.mint-swipe-item img {
  width: 100%;
}
</style>
