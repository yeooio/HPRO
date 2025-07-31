<template>
  <div class="container">
    <header>
      <div class="logo">
        <div class="logo-circle">
          <i class="fas fa-shield-alt fa-2x"></i>
        </div>
        <div class="logo-text">汛眼守卫</div>
      </div>
      <p class="subtitle">基于双模AI的洪涝灾害全周期防控系统 - 融合反光感知与轻量化CNN的智慧防灾平台</p>
    </header>

    <div class="dashboard">
      <!-- 灾前预警系统 -->
      <div class="dashboard-card">
        <div class="card-header">
          <i class="fas fa-exclamation-triangle"></i>
          <h2>灾前预警系统</h2>
        </div>

        <div class="upload-area" @click="handleSurveillanceUpload">
          <div class="upload-icon">
            <i class="fas fa-camera"></i>
          </div>
          <p class="upload-text">上传监控摄像头图像进行积水分析</p>
          <button class="upload-btn">选择图像</button>
          <input type="file" ref="surveillanceInput" accept="image/*" style="display:none;">
        </div>

        <div class="image-preview">
          <img v-if="surveillanceImage" :src="surveillanceImage" alt="监控图像预览" class="preview-image">
          <p v-else class="placeholder-text">监控图像预览区域</p>
        </div>

        <div class="analysis-section">
          <div class="result-title">
            <i class="fas fa-chart-line"></i> AI分析结果
          </div>

          <div class="result-box">
            <div class="result-item">
              <span class="result-label">积水状态：</span>
              <span>{{ surveillanceStatus }}</span>
            </div>

            <div class="result-item">
              <span class="result-label">置信度：</span>
              <span>{{ surveillanceConfidence }}%</span>
            </div>

            <div class="confidence-meter">
              <div class="confidence-level" :style="{ width: surveillanceConfidence + '%' }"></div>
            </div>

            <div class="result-item">
              <span class="result-label">预警等级：</span>
              <span :class="['alert-indicator', surveillanceAlertClass]">{{ surveillanceAlert }}</span>
            </div>
          </div>

          <div class="model-info">
            <div>
              <div class="model-title">定制ResNet18模型</div>
              <p>融合反光注意力机制(RAMP)与边缘检测，提升复杂场景识别能力</p>
            </div>
            <div>
              <div class="model-title">性能指标</div>
              <p>准确率89.3%，较基线提升11%</p>
            </div>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">83%</div>
              <div class="stat-label">预测准确率</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">11%</div>
              <div class="stat-label">较基线提升</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 灾后评估系统 -->
      <div class="dashboard-card">
        <div class="card-header">
          <i class="fas fa-helicopter"></i>
          <h2>灾后评估系统</h2>
        </div>

        <div class="upload-area" @click="handleDroneUpload">
          <div class="upload-icon">
            <i class="fas fa-camera"></i>
          </div>
          <p class="upload-text">上传无人机航拍图像进行道路评估</p>
          <button class="upload-btn">选择图像</button>
          <input type="file" ref="droneInput" accept="image/*" style="display:none;">
        </div>

        <div class="image-preview">
          <img v-if="droneImage" :src="droneImage" alt="无人机图像预览" class="preview-image">
          <p v-else class="placeholder-text">无人机图像预览区域</p>
        </div>

        <div class="analysis-section">
          <div class="result-title">
            <i class="fas fa-chart-line"></i> AI分析结果
          </div>

          <div class="result-box">
            <div class="result-item">
              <span class="result-label">道路状态：</span>
              <span>{{ droneStatus }}</span>
            </div>

            <div class="result-item">
              <span class="result-label">置信度：</span>
              <span>{{ droneConfidence }}%</span>
            </div>

            <div class="confidence-meter">
              <div class="confidence-level" :style="{ width: droneConfidence + '%' }"></div>
            </div>

            <div class="result-item">
              <span class="result-label">通行建议：</span>
              <span :style="{ color: droneSuggestionColor, fontWeight: 'bold' }">{{ droneSuggestion }}</span>
            </div>
          </div>

          <div class="model-info">
            <div>
              <div class="model-title">轻量化CNN模型</div>
              <p><10层网络，参数量1.2M，适配无人机端部署</p>
            </div>
            <div>
              <div class="model-title">实时性能</div>
              <p>92%准确率，25ms/帧推理速度</p>
            </div>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">1.2M</div>
              <div class="stat-label">模型参数</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">10层</div>
              <div class="stat-label">网络深度</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p>全国大学生气象科技创新大赛参赛作品 | <span class="highlight">洪涝灾害智能监测平台</span></p>
      <p>基于AI的灾前预警与灾后评估系统 | 融合<span class="highlight">反光注意力机制</span>与<span class="highlight">轻量化CNN</span></p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 后端配置（请确保IP和端口与后端一致）
const API_BASE = 'http://192.168.20.214:5000'; 

// 状态管理
const surveillanceInput = ref(null);
const droneInput = ref(null);
const surveillanceImage = ref('');
const droneImage = ref('');
const surveillanceStatus = ref('等待分析');
const surveillanceConfidence = ref(0);
const surveillanceAlert = ref('正常');
const surveillanceAlertClass = ref('alert-green');
const droneStatus = ref('等待分析');
const droneConfidence = ref(0);
const droneSuggestion = ref('-');
const droneSuggestionColor = ref('');
const isLoading = ref(false);
const errorMessage = ref(''); // 统一错误提示

// 工具函数：文件转Base64
const fileToBase64 = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });
};

// 处理灾前预警上传
const handleSurveillanceUpload = () => {
  errorMessage.value = '';
  surveillanceInput.value.click();
};

// 处理灾后评估上传
const handleDroneUpload = () => {
  errorMessage.value = '';
  droneInput.value.click();
};

// 调用灾前预警接口
const analyzeSurveillanceImage = async (base64) => {
  try {
    isLoading.value = true;
    const response = await axios.post(
      `${API_BASE}/before_predict`,
      { image: base64.split(',')[1] }, // 去掉Base64前缀
      {
        timeout: 8000, // 8秒超时
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const { water, confidence, alert_level } = response.data.result;
    surveillanceStatus.value = water ? "存在积水" : "无积水";
    surveillanceConfidence.value = confidence;
    surveillanceAlert.value = alert_level;
    
    // 设置预警颜色
    surveillanceAlertClass.value = 
      alert_level.includes("红色") ? "alert-red" :
      alert_level.includes("橙色") ? "alert-yellow" :
      "alert-green";

  } catch (error) {
    handleApiError(error, 'surveillance');
  } finally {
    isLoading.value = false;
  }
};

// 调用灾后评估接口
const analyzeDroneImage = async (base64) => {
  try {
    isLoading.value = true;
    const response = await axios.post(
      `${API_BASE}/after_predict`,
      { image: base64.split(',')[1] },
      {
        timeout: 8000,
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const { water, confidence, alert_level } = response.data.result;
    droneStatus.value = water ? "道路积水" : "道路通畅";
    droneConfidence.value = confidence;
    droneSuggestion.value = water ? "❌ 不可通行，建议绕道" : "✅ 可安全通行";
    droneSuggestionColor.value = water ? "#ff6666" : "#00cc66";

  } catch (error) {
    handleApiError(error, 'drone');
  } finally {
    isLoading.value = false;
  }
};

// 统一错误处理
const handleApiError = (error, type) => {
  console.error(`${type}分析失败:`, error);
  
  if (error.code === 'ERR_NETWORK') {
    errorMessage.value = '无法连接后端服务，请检查网络或服务状态';
  } else if (error.response) {
    errorMessage.value = `后端返回错误: ${error.response.data?.message || error.response.status}`;
  } else {
    errorMessage.value = `请求失败: ${error.message}`;
  }

  if (type === 'surveillance') {
    surveillanceStatus.value = "分析失败";
  } else {
    droneStatus.value = "分析失败";
  }
};

// 文件选择处理
const handleSurveillanceFileChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    const base64 = await fileToBase64(file);
    surveillanceImage.value = base64;
    await analyzeSurveillanceImage(base64);
  } catch (error) {
    errorMessage.value = "图片处理失败: " + error.message;
  }
};

const handleDroneFileChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    const base64 = await fileToBase64(file);
    droneImage.value = base64;
    await analyzeDroneImage(base64);
  } catch (error) {
    errorMessage.value = "图片处理失败: " + error.message;
  }
};

// 初始化事件监听
onMounted(() => {
  surveillanceInput.value?.addEventListener('change', handleSurveillanceFileChange);
  droneInput.value?.addEventListener('change', handleDroneFileChange);
});
</script>

<style>
/* 保持原有的CSS样式不变 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
}

:root {
  --primary-dark: #0c2461;
  --primary: #1e3799;
  --primary-light: #4a69bd;
  --accent: #00f2fe;
  --accent-alt: #4facfe;
  --warning: #ff9f1c;
  --danger: #ff416c;
  --success: #00b09b;
  --text-light: #ffffff;
  --text-gray: #e0e0e0;
  --bg-dark: #0a1930;
  --bg-card: rgba(255, 255, 255, 0.08);
  --border-light: rgba(255, 255, 255, 0.1);
}

body {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  color: var(--text-light);
  min-height: 100vh;
  padding: 20px;
  overflow-x: hidden;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

header {
  text-align: center;
  padding: 30px 0;
  margin-bottom: 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-light);
}

h1 {
  font-size: 3.2rem;
  margin-bottom: 10px;
  background: linear-gradient(to right, var(--accent-alt), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.4rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-gray);
}

.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 40px;
}

.dashboard-card {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-light);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--border-light);
}

.card-header i {
  font-size: 2.5rem;
  margin-right: 15px;
  color: var(--accent-alt);
  background: rgba(0, 0, 0, 0.3);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.card-header h2 {
  font-size: 2rem;
  background: linear-gradient(to right, var(--accent-alt), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.upload-area {
  background: rgba(0, 0, 0, 0.2);
  border: 2px dashed var(--border-light);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  margin-bottom: 30px;
  cursor: pointer;
}

.upload-area:hover {
  border-color: var(--accent-alt);
}

.upload-icon {
  font-size: 5rem;
  color: var(--accent-alt);
  margin-bottom: 20px;
}

.upload-text {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: var(--text-gray);
}

.upload-btn {
  background: linear-gradient(to right, var(--accent-alt), var(--accent));
  color: white;
  border: none;
  padding: 12px 35px;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
}

.image-preview {
  width: 100%;
  height: 300px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--border-light);
}

.image-preview img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.placeholder-text {
  color: rgba(255, 255, 255, 0.4);
  font-size: 1.2rem;
}

.analysis-section {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 25px;
}

.result-title {
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: var(--accent);
}

.result-title i {
  margin-right: 10px;
}

.result-box {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.result-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-light);
}

.result-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border: none;
}

.result-label {
  font-weight: 600;
  color: var(--accent);
}

.confidence-meter {
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 15px 0;
  overflow: hidden;
}

.confidence-level {
  height: 100%;
  background: linear-gradient(to right, var(--danger), #ff4b2b);
  border-radius: 10px;
  width: 0;
  transition: width 1s ease;
}

.safe .confidence-level {
  background: linear-gradient(to right, var(--success), #96c93d);
}

.alert-indicator {
  display: inline-block;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.alert-green {
  background: var(--success);
  color: white;
}

.alert-yellow {
  background: var(--warning);
  color: black;
}

.alert-red {
  background: var(--danger);
  color: white;
}

.model-info {
  display: flex;
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 15px;
  font-size: 0.9rem;
  color: var(--text-gray);
  gap: 20px;
}

.model-info > div {
  flex: 1;
}

.model-title {
  color: var(--accent-alt);
  margin-bottom: 5px;
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.stat-card {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  border: 1px solid var(--border-light);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(to right, var(--accent-alt), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 10px 0;
}

.stat-label {
  color: var(--text-gray);
  font-size: 1rem;
}

.map-container {
  grid-column: span 2;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border-light);
  margin-top: 20px;
}

#map {
  width: 100%;
  height: 100%;
}

footer {
  text-align: center;
  padding: 30px 0;
  font-size: 1.1rem;
  color: var(--text-gray);
  border-top: 1px solid var(--border-light);
  margin-top: 30px;
}

.highlight {
  color: var(--accent);
  font-weight: 600;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-alt), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.logo-text {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(to right, var(--accent-alt), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 900px) {
  .dashboard {
    grid-template-columns: 1fr;
  }

  .map-container {
    grid-column: 1;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }
}
</style> 