# msg-tools

对聊天中的文本和图片消息进行处理的在线工具。

![](https://user-images.githubusercontent.com/47057319/162747487-4b248f29-2930-41ec-bc16-88e3ec01c79f.png)

## 支持的功能

* 文本处理
    * Base64/85 的编码和解码
    * 英文字母混淆（使用希腊字母和西里尔字母替换）
    * 插入 `U+200B` 等不可见字符
    * 与佛论禅的编码和解码
    * 聊天消息文本端对端加密
* 图片处理
    * 按块打乱和恢复
* 深色模式（跟随系统设定）
* 安装为 PWA 并离线使用

## 从源代码编译

```
npm install
npm run build
```