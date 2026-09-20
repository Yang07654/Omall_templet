@echo off
chcp 65001 >nul
echo ============================================
echo  Omall 模板上传到 GitHub
echo ============================================
echo.

cd /d "%~dp0"

echo [1/6] 清理旧的 .git 目录...
if exist .git (
    rmdir /s /q .git 2>nul
    timeout /t 2 /nobreak >nul
)

echo [2/6] 初始化 Git 仓库...
git init
git branch -M main

echo [3/6] 添加远程仓库...
git remote add origin https://github.com/Yang07654/Omall_templet.git

echo [4/6] 添加文件...
git add -A

echo [5/6] 提交更改...
git commit -m "Initial commit: Omall product templates with README"

echo [6/6] 推送到 GitHub...
git push -u origin main

echo.
echo ============================================
echo  上传完成！
echo ============================================
pause
