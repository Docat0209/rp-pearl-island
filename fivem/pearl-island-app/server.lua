local RESOURCE = GetCurrentResourceName()
-- 取得 repo 根目錄（resource 位於 <repo>/fivem/pearl-island-app/）
local REPO_ROOT = GetResourcePath(RESOURCE) .. '/../..'

-- pi_update：僅限 server console（source == 0）執行
RegisterCommand('pi_update', function(source)
    if source ~= 0 then
        print('[pearl-island] pi_update 只能在 server console 執行')
        return
    end

    print('[pearl-island] 拉取最新程式碼...')
    local pull = os.execute('cd "' .. REPO_ROOT .. '" && git pull origin main')
    if pull ~= 0 then
        print('[pearl-island] git pull 失敗，請確認 git 已安裝且 remote 可連線')
        return
    end

    print('[pearl-island] 重新建置網站...')
    local build = os.execute('cd "' .. REPO_ROOT .. '" && npm run build:fivem')
    if build ~= 0 then
        print('[pearl-island] npm build 失敗，請確認 Node.js 已安裝')
        return
    end

    print('[pearl-island] 更新完成，重啟 resource...')
    Wait(500)
    ExecuteCommand('restart ' .. RESOURCE)
end, true)

print('[pearl-island] 輸入 pi_update 可更新至最新版本')
