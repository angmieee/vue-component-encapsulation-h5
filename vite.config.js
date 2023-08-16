import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { resolve } from 'path';

const themePath = path.resolve("src/styles/custom_theme.less")

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    '@red': '#2eb7fe',
                },
            },
        },
    },
    resolve: {
        // 解决 vant 使用导入less样式使用 vite 不兼容的 "~@" 前缀的问题
        { find: /^~/, replacement: "" },
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    // 直接覆盖变量
                    // "text-color": "#111",
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    hack: `true; @import "${themePath}";`
                }
            }
        }
    }
});
