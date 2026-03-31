访客追踪 — 前端接口文档

  通用说明

  响应结构

  所有接口统一返回以下 JSON 结构：

  interface ApiResponse<T> {
    code: number       // 200 = 成功，401 = 未登录，403 = 无权限
    message: string    // 描述信息
    data: T            // 业务数据
    timestamp: string  // 响应时间戳
  }

  前端请求客户端已自动解包 data 字段，调用方直接拿到 T 类型数据。

  一、公开接口（Public）

  1.1 页面进入上报

  POST /api/public/track/enter

  统一入口：识别访客、判定会话、去重页面PV、去重内容阅读。

  请求体 (JSON Body)
  字段: visitorUuid
  类型: string
  必填: 否
  说明: 访客UUID（前端 localStorage 生成）
  ────────────────────────────────────────
  字段: pageKey
  类型: string
  必填: 否
  说明: 页面标识，如 PAGE:/about、ARTICLE:123、TALK:456
  ────────────────────────────────────────
  字段: pageUrl
  类型: string
  必填: 否
  说明: 当前页面完整 URL
  ────────────────────────────────────────
  字段: referer
  类型: string
  必填: 否
  说明: 来源页面 URL（document.referrer）
  ────────────────────────────────────────
  字段: utmSource
  类型: string
  必填: 否
  说明: UTM 来源标识
  ────────────────────────────────────────
  字段: utmMedium
  类型: string
  必填: 否
  说明: UTM 媒介
  ────────────────────────────────────────
  字段: utmCampaign
  类型: string
  必填: 否
  说明: UTM 活动
  ────────────────────────────────────────
  字段: contentType
  类型: string
  必填: 否
  说明: 内容类型：ARTICLE / TALK
  ────────────────────────────────────────
  字段: contentId
  类型: number
  必填: 否
  说明: 内容ID（文章/说说主键）
  响应 data

  interface TrackEnterResult {
    visitorUuid: string       // 最终确认的访客UUID（可能由服务端生成）
    sessionId: string         // 当前会话ID
    newVisitor: boolean       // 是否新访客
    newSession: boolean       // 是否新会话
    pagePvCounted: boolean    // 本次PV是否被计数
    contentReadCounted: boolean // 本次内容阅读是否被计数
  }

  调用方
  - blog-web VisitorTracker 组件 — 普通页面上报（不带 contentType/contentId）
  - blog-web ContentTracker 组件 — 内容页上报（带 contentType + contentId）
