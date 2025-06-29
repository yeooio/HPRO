<template>
  <div class="font-inter bg-light text-dark antialiased">
    <!-- 导航栏 -->
    <header ref="navbarRef" id="navbar" class="fixed w-full z-50 transition-all duration-300 bg-transparent">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" class="flex items-center space-x-2">
          <div class="bg-primary text-white p-2 rounded-lg">
            <i class="fa fa-cloud text-xl"></i>
          </div>
          <span class="text-xl font-bold text-white">气象智防</span>
        </a>

        <!-- 桌面导航 -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-white hover:text-secondary transition-colors">创新亮点</a>
          <a href="#application" class="text-white hover:text-secondary transition-colors">应用场景</a>
          <router-link to="/Func">
          <a class="btn-primary" @click="handleClick()">
            <i class="fa fa-play-circle mr-2"></i>测试模型
          </a>
        </router-link>
          <a href="#team" class="text-white hover:text-secondary transition-colors">技术介绍</a>
        </nav>

        <!-- 移动端菜单按钮 -->
        <button id="menu-toggle" class="md:hidden text-white text-2xl">
          <i class="fa fa-bars"></i>
        </button>
      </div>

      <!-- 移动端导航菜单 -->
      <div id="mobile-menu" class="hidden md:hidden bg-white shadow-lg absolute w-full">
        <div class="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <a href="#features" class="text-dark hover:text-primary transition-colors py-2">创新亮点</a>
          <a href="#application" class="text-dark hover:text-primary transition-colors py-2">应用场景</a>
          <a href="#technology" class="text-dark hover:text-primary transition-colors py-2">技术方案</a>
          <a href="#demo" class="text-dark hover:text-primary transition-colors py-2">系统演示</a>
          <a href="#team" class="text-dark hover:text-primary transition-colors py-2">团队介绍</a>
        </div>
      </div>
    </header>

    <!-- 英雄区域 -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-dark/90 mix-blend-multiply"</div>
        <img src="https://picsum.photos/id/1015/1920/1080" alt="气象卫星云图背景" class="w-full h-full object-cover">
      </div>

      <div class="container mx-auto px-4 z-10 text-center">
        <h1 class="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight mb-6 text-shadow">
          洪涝灾害智能预警系统
        </h1>
        <p class="text-[clamp(1rem,2vw,1.25rem)] text-white/90 max-w-3xl mx-auto mb-10">
          融合双AI模型，打造从预警到评估的新型预警系统，守护生命财产安全
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link to="/Func">
          <a class="btn-primary" @click="handleClick()">
            <i class="fa fa-play-circle mr-2"></i>测试模型
          </a>
        </router-link>
          <a href="#technology" class="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 backdrop-blur-sm">
            <i class="fa fa-info-circle mr-2"></i>了解技术
          </a>
        </div>

        <!-- 滚动提示 -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i class="fa fa-angle-down text-2xl"></i>
        </div>
      </div>
    </section>

    <!-- 作品亮点 -->
    <section id="features" class="bg-white section-padding">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">创新亮点</h2>
          <p class="text-info max-w-2xl mx-auto">我们的作品融合前沿技术与实际应用，在多个维度实现创新突破</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 亮点卡片1 -->
          <div class="bg-light rounded-xl p-6 shadow-md card-hover">
            <div class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <i class="fa fa-robot text-2xl text-primary"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">双模AI融合</h3>
            <p class="text-info">创新性地融合反光感知与轻量CNN技术，实现气象数据的多模态分析，提升预测精度。</p>
          </div>

          <!-- 亮点卡片2 -->
          <div class="bg-light rounded-xl p-6 shadow-md card-hover">
            <div class="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
              <i class="fa fa-link text-2xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">全周期闭环</h3>
            <p class="text-info">构建"灾前预警-灾中响应-灾后评估"的完整业务链条，提供气象灾害防御的一站式解决方案。</p>
          </div>

          <!-- 亮点卡片3 -->
          <div class="bg-light rounded-xl p-6 shadow-md card-hover">
            <div class="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <i class="fa fa-cubes text-2xl text-accent"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">跨学科融合</h3>
            <p class="text-info">整合气象学、计算机科学等多学科知识，打造跨界创新解决方案。</p>
          </div>

          <!-- 亮点卡片4 -->
          <div class="bg-light rounded-xl p-6 shadow-md card-hover">
            <div class="w-14 h-14 bg-success/10 rounded-lg flex items-center justify-center mb-6">
              <i class="fa fa-rocket text-2xl text-success"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">轻量化部署</h3>
            <p class="text-info">优化模型结构，支持边缘计算设备部署，降低系统成本，提高响应速度。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section id="application" class="bg-gradient-to-br from-primary/5 to-secondary/5 section-padding">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">应用场景</h2>
          <p class="text-info max-w-2xl mx-auto">围绕气象与多行业融合，提供精准解决方案</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 场景卡片1 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
            <img src="https://picsum.photos/id/1019/600/400" alt="城市洪涝预警" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <i class="fa fa-tint text-primary"></i>
                </div>
                <h3 class="text-xl font-semibold">城市洪涝预警</h3>
              </div>
              <p class="text-info mb-4">基于监控数据，实时报告道路积水情况，辅助城市防洪决策。</p>
             
            </div>
          </div>

          <!-- 场景卡片2 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
            <img src="../assets/2.jpg" alt="农业气象服务" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center mr-3">
                  <i class="fa fa-leaf text-success"></i>
                </div>
                <h3 class="text-xl font-semibold">灾后路况评估</h3>
              </div>
              <p class="text-info mb-4">通过无人机采集数据，对灾后路况再次分析，指导援救行动。</p>
              <a href="#" class="text-primary font-medium hover:underline flex items-center">
                了解更多 <i class="fa fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          <!-- 场景卡片3 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-md card-hover">
            <img src="../assets/3.jpg" alt="交通气象保障" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center mr-3">
                  <i class="fa fa-car text-warning"></i>
                </div>
                <h3 class="text-xl font-semibold">交通气象保障</h3>
              </div>
              <p class="text-info mb-4">针对积水道路，迅速做出警报，保障交通安全，优化运输调度。</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术方案 -->
    <section id="technology" class="bg-white section-padding">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">技术方案</h2>
          <p class="text-info max-w-2xl mx-auto">采用先进的技术架构，确保系统高效、稳定、精准</p>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <div class="relative">
              <div class="w-64 h-64 bg-primary/10 rounded-full absolute -top-10 -left-10 blur-3xl"></div>
              <div class="w-64 h-64 bg-secondary/10 rounded-full absolute -bottom-10 -right-10 blur-3xl"></div>
              <img src="https://picsum.photos/id/1/600/600" alt="技术架构图" class="relative z-10 rounded-xl shadow-xl">
            </div>
          </div>

          <div class="lg:w-1/2">
            <div class="space-y-8">
              <!-- 技术要点1 -->
              <div class="flex">
                <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <i class="fa fa-database text-primary text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">多源数据融合</h3>
                  <p class="text-info">整合气象卫星、地面观测站、雷达数据、社交媒体等多源异构数据，构建全面的气象监测网络。</p>
                </div>
              </div>

              <!-- 技术要点2 -->
              <div class="flex">
                <div class="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <i class="fa fa-microchip text-secondary text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">轻量级AI模型</h3>
                  <p class="text-info">基于轻量级CNN架构，优化模型结构，在保证预测精度的同时，大幅降低计算资源需求。</p>
                </div>
              </div>

              <!-- 技术要点3 -->
              <div class="flex">
                <div class="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <i class="fa fa-cloud text-accent text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">边缘-云协同架构</h3>
                  <p class="text-info">采用边缘计算进行数据预处理和初步分析，云端进行深度分析和模型训练，实现高效协同。</p>
                </div>
              </div>

              <!-- 技术要点4 -->
              <div class="flex">
                <div class="flex-shrink-0 w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mr-4">
                  <i class="fa fa-bolt text-success text-xl"></i>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">实时数据流处理</h3>
                  <p class="text-info">基于高性能流处理框架，实现气象数据的实时采集、处理和分析，确保预警信息的时效性。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 系统演示 -->
  
    <!-- 团队介绍 -->


    <!-- 联系我们 -->
    <section class="bg-gradient-to-br from-primary to-dark text-white section-padding">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-6">联系我们</h2>
            <p class="text-white/80 mb-8 max-w-lg">
              我们期待与您合作，共同推动气象科技进步，守护生命财产安全。如有任何疑问或合作意向，请随时与我们联系。
            </p>

            <div class="space-y-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <i class="fa fa-envelope text-xl"></i>
                </div>
                <div>
                  <h4 class="text-lg font-medium mb-1">电子邮箱</h4>
                  <p class="text-white/70">contact@weather-ai.com</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <i class="fa fa-phone text-xl"></i>
                </div>
                <div>
                  <h4 class="text-lg font-medium mb-1">联系电话</h4>
                  <p class="text-white/70">+86 10 8888 7777</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <i class="fa fa-map-marker text-xl"></i>
                </div>
                <div>
                  <h4 class="text-lg font-medium mb-1">办公地址</h4>
                  <p class="text-white/70">北京市海淀区中关村南大街5号</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:w-1/2 w-full">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20">
              <h3 class="text-xl font-semibold mb-6">发送消息</h3>
              <form class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-white/90 mb-2">姓名</label>
                  <input type="text" id="name" class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="请输入您的姓名">
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-white/90 mb-2">电子邮箱</label>
                  <input type="email" id="email" class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="请输入您的电子邮箱">
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-white/90 mb-2">留言内容</label>
                  <textarea id="message" rows="4" class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="请输入您的留言内容"></textarea>
                </div>

                <button type="submit" class="w-full bg-white text-primary font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-white/90">
                  发送消息
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-dark text-white/70 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-6">
              <div class="bg-primary text-white p-2 rounded-lg">
                <i class="fa fa-cloud text-xl"></i>
              </div>
              <span class="text-xl font-bold text-white">灾害智防</span>
            </div>
            <p class="mb-6">融合多模态AI技术，打造气象灾害防御新范式</p>
            
          </div>

          <div>
            <h4 class="text-white font-semibold mb-6">快速链接</h4>
            <ul class="space-y-3">
              <li><a href="#features" class="hover:text-white transition-colors">创新亮点</a></li>
              <li><a href="#application" class="hover:text-white transition-colors">应用场景</a></li>
              <li><a href="#technology" class="hover:text-white transition-colors">技术方案</a></li>
              <li><a href="#demo" class="hover:text-white transition-colors">系统演示</a></li>
              <li><a href="#team" class="hover:text-white transition-colors">团队介绍</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-6">资源中心</h4>
            <ul class="space-y-3">
              <li><a href="#" class="hover:text-white transition-colors">技术文档</a></li>
              <li><a href="#" class="hover:text-white transition-colors">API接口</a></li>
              <li><a href="#" class="hover:text-white transition-colors">使用教程</a></li>
              <li><a href="#" class="hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#" class="hover:text-white transition-colors">更新日志</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-6">订阅更新</h4>
            <p class="mb-4">订阅我们的通讯，获取最新的产品更新和技术动态</p>
            <form class="flex">
              <input type="email" placeholder="您的电子邮箱" class="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg text-white focus:outline-none focus:ring-1 focus:ring-primary">
              <button type="submit" class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg transition-colors">
                <i class="fa fa-paper-plane"></i>
              </button>
            </form>

          </div>
        </div>

        <div class="pt-8 border-t border-white/10 text-center">
          <p>&copy; 2025 气象智防科技. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Chart from 'chart.js/auto';
import { useRouter } from 'vue-router';
const router = useRouter()
export default {
  name: 'HomePage',
  setup() {
    const navbarRef = ref(null);
    const scrolled = ref(false);
    const menuOpen = ref(false);
    const rainfallChart = ref(null);
    const riskChart = ref(null);

    // 滚动事件处理函数
    const handleScroll = () => {
      const navbar = navbarRef.value;
      if (window.scrollY > 50) {
        navbar.classList.add('bg-dark\/90', 'backdrop-blur-md', 'shadow-md','el');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('bg-dark\/90', 'backdrop-blur-md', 'shadow-md','el');
        navbar.classList.add('bg-transparent');
      }
    };
    const handleClick=()=>{
      router.push('/Func');
    }

    onMounted(() => {
      // 组件挂载后监听滚动事件
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      // 组件销毁前移除滚动事件监听
      window.removeEventListener('scroll', handleScroll);
    });

    // 导航项
    const navItems = ref([
      { id: 'features', name: '创新亮点' },
      { id: 'application', name: '应用场景' },
      { id: 'technology', name: '技术方案' },
      { id: 'demo', name: '系统演示' },
      { id: 'team', name: '团队介绍' }
    ]);

    // 亮点数据
    const features = ref([
      {
        icon: 'fa fa-lightbulb-o',
        color: 'text-primary',
        bgClass: 'bg-primary-10',
        title: '双模AI融合',
        description: '创新性地融合反光感知与轻量CNN技术，实现气象数据的多模态分析，提升预测精度。'
      },
      {
        icon: 'fa fa-link',
        color: 'text-secondary',
        bgClass: 'bg-secondary-10',
        title: '全周期闭环',
        description: '构建"灾前预警-灾中响应-灾后评估"的完整业务链条，提供气象灾害防御的一站式解决方案。'
      },
      {
        icon: 'fa fa-cubes',
        color: 'text-accent',
        bgClass: 'bg-accent-10',
        title: '跨学科融合',
        description: '整合气象学、计算机科学、水利工程等多学科知识，打造跨界创新解决方案。'
      },
      {
        icon: 'fa fa-rocket',
        color: 'text-success',
        bgClass: 'bg-success-10',
        title: '轻量化部署',
        description: '优化模型结构，支持边缘计算设备部署，降低系统成本，提高响应速度。'
      }
    ]);

    // 应用场景
    const applications = ref([
      {
        image: 'https://picsum.photos/id/1036/600/400',
        icon: 'fa fa-tint',
        iconColor: 'text-primary',
        iconBg: 'bg-primary-10',
        title: '城市洪涝预警',
        description: '基于气象数据和城市排水模型，提前预测积水区域和深度，辅助城市防汛决策。'
      },
      {
        image: 'https://picsum.photos/id/1080/600/400',
        icon: 'fa fa-leaf',
        iconColor: 'text-success',
        iconBg: 'bg-success-10',
        title: '农业气象服务',
        description: '为农作物生长提供精细化气象预报，指导农事活动，降低气象灾害对农业生产的影响。'
      },
      {
        image: 'https://picsum.photos/id/1019/600/400',
        icon: 'fa fa-car',
        iconColor: 'text-warning',
        iconBg: 'bg-warning-10',
        title: '交通气象保障',
        description: '针对恶劣天气条件提供道路结冰、低能见度等预警，保障交通安全，优化运输调度。'
      }
    ]);

    // 技术方案
    const technologies = ref([
      {
        icon: 'fa fa-database',
        color: 'text-primary',
        bgClass: 'bg-primary-10',
        title: '多源数据融合',
        description: '整合气象卫星、地面观测站、雷达数据、社交媒体等多源异构数据，构建全面的气象监测网络。'
      },
      {
        icon: 'fa fa-microchip',
        color: 'text-secondary',
        bgClass: 'bg-secondary-10',
        title: '轻量级AI模型',
        description: '基于轻量级CNN架构，优化模型结构，在保证预测精度的同时，大幅降低计算资源需求。'
      },
      {
        icon: 'fa fa-cloud',
        color: 'text-accent',
        bgClass: 'bg-accent-10',
        title: '边缘-云协同架构',
        description: '采用边缘计算进行数据预处理和初步分析，云端进行深度分析和模型训练，实现高效协同。'
      },
      {
        icon: 'fa fa-bolt',
        color: 'text-success',
        bgClass: 'bg-success-10',
        title: '实时数据流处理',
        description: '基于高性能流处理框架，实现气象数据的实时采集、处理和分析，确保预警信息的时效性。'
      }
    ]);

    // 预警信息
    const alerts = ref([
      {
        title: '暴雨红色预警',
        time: '10分钟前',
        area: '海淀区、朝阳区、丰台区',
        class: 'bg-danger-20 border border-danger-30'
      },
      {
        title: '大风黄色预警',
        time: '30分钟前',
        area: '昌平区、顺义区、通州区',
        class: 'bg-warning-20 border border-warning-30'
      },
      {
        title: '雷电蓝色预警',
        time: '1小时前',
        area: '全市范围',
        class: 'bg-info-20 border border-info-30'
      }
    ]);

    // 系统状态
    const systemStatus = ref([
      {
        name: '数据更新',
        value: '实时更新',
        width: '95%',
        textColor: 'text-success',
        barColor: 'bg-success'
      },
      {
        name: '模型预测',
        value: '正常运行',
        width: '98%',
        textColor: 'text-success',
        barColor: 'bg-success'
      },
      {
        name: '预警响应',
        value: '部分激活',
        width: '65%',
        textColor: 'text-warning',
        barColor: 'bg-warning'
      }
    ]);

    return {
      navbarRef,
      scrolled,
      menuOpen,
      rainfallChart,
      riskChart,
      navItems,
      features,
      applications,
      technologies,
      alerts,
      systemStatus
    };
  }
};
</script>


<style scoped>
.bg-primary\/10 {
    background-color: rgb(22 93 255 / 0.1);
}
.bg-secondary\/10 {
    background-color: rgb(54 191 250 / 0.1);
}
/* <style> */
.rounded-lg {
    border-radius: 0.5rem;
}
/* <style> */
.justify-center {
    justify-content: center;
}
/* <style> */
.items-center {
    align-items: center;
}
/* <style> */
.w-14 {
    width: 3.5rem;
}
/* <style> */
.h-14 {
    height: 3.5rem;
}
/* <style> */
.flex {
    display: flex
;
}

/* <style> */
.mb-6 {
    margin-bottom: 1.5rem;
}

.bg-accent\/10 {
    background-color: rgb(15 198 194 / 0.1);
}
.bg-success\/10 {
    background-color: rgb(0 180 42 / 0.1);
}














.mix-blend-multiply {
    mix-blend-mode: multiply;
}
/* <style> */
.to-dark\/90 {
    --tw-gradient-to: rgb(29 33 41 / 0.9) var(--tw-gradient-to-position);
}
/* <style> */
.from-primary\/90 {
    --tw-gradient-from: rgb(22 93 255 / 0.9) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(22 93 255 / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
/* <style> */
.bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
/* <style> */
.inset-0 {
    inset: 0px;
}
/* <style> */
.absolute {
    position: absolute;
}
/* <style> */
*, ::after, ::before {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
.el{
  background-color: rgb(29 33 41 / 0.9);

}
div#app {
    width: 100vw !important;
    /* height: 100vh; */
    padding: 0;
}
/* === 基础样式 === */
.content-auto {
  content-visibility: auto;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* === 卡片悬停效果 === */
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: translateY(-4px);
}

/* === 主要按钮 === */
.btn-primary {
  background-color: #165DFF;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.btn-primary:hover {
  background-color: rgba(22, 93, 255, 0.9);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* === 区块内边距 === */
.section-padding {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
@media (min-width: 768px) {
  .section-padding {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

/* === 动画效果 === */
.animate-bounce {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-15px);
  }
  60% {
    transform: translateX(-50%) translateY(-7px);
  }
}

/* === 透明度工具类 === */
/* 背景色 */
.bg-primary-90 { background-color: rgba(22, 93, 255, 0.9); }
.bg-dark-90 { background-color: rgba(29, 33, 41, 0.9); }
.bg-dark-50 { background-color: rgba(29, 33, 41, 0.5); }
.bg-danger-80 { background-color: rgba(245, 63, 63, 0.8); }
.bg-danger-20 { background-color: rgba(245, 63, 63, 0.2); }
.bg-warning-20 { background-color: rgba(255, 125, 0, 0.2); }
.bg-info-20 { background-color: rgba(134, 144, 156, 0.2); }
.bg-primary-10 { background-color: rgba(22, 93, 255, 0.1); }
.bg-secondary-10 { background-color: rgba(54, 191, 250, 0.1); }
.bg-accent-10 { background-color: rgba(15, 198, 194, 0.1); }
.bg-success-10 { background-color: rgba(0, 180, 42, 0.1); }
.bg-warning-10 { background-color: rgba(255, 125, 0, 0.1); }
.bg-white-10 { background-color: rgba(255, 255, 255, 0.1); }
.bg-white-20 { background-color: rgba(255, 255, 255, 0.2); }
.bg-white-5 { background-color: rgba(255, 255, 255, 0.05); }

/* 悬停效果 */
.hover\:bg-primary-90:hover { background-color: rgba(22, 93, 255, 0.9); }
.hover\:bg-white-20:hover { background-color: rgba(255, 255, 255, 0.2); }

/* 边框色 */
.border-danger-30 { border-color: rgba(245, 63, 63, 0.3); }
.border-warning-30 { border-color: rgba(255, 125, 0, 0.3); }
.border-info-30 { border-color: rgba(134, 144, 156, 0.3); }
.border-white-10 { border-color: rgba(255, 255, 255, 0.1); }
.border-white-20 { border-color: rgba(255, 255, 255, 0.2); }

/* 文字色 */
.text-white-70 { color: rgba(255, 255, 255, 0.7); }
.text-white-80 { color: rgba(255, 255, 255, 0.8); }
.text-white-90 { color: rgba(255, 255, 255, 0.9); }

/* === 响应式调整 === */
@media (max-width: 768px) {
  .section-padding {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
.fixed w-full z-50 transition-all duration-300 bg-dark\/90 backdrop-blur-md shadow-md{
  background-color: red``;
}
</style>