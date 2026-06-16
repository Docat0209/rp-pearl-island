local RESOURCE     = GetCurrentResourceName()
local RESOURCE_DIR = GetResourcePath(RESOURCE)

-- pi_update：僅限 server console（source == 0）執行
-- 開發流程：dev 機執行 npm run build:fivem → git push，server 執行 pi_update 即可
RegisterCommand('pi_update', function(source)
    if source ~= 0 then
        print('[pearl-island] pi_update 只能在 server console 執行')
        return
    end

    print('[pearl-island] 拉取最新版本...')
    local ok = os.execute('cd "' .. RESOURCE_DIR .. '" && git pull origin main')
    if ok ~= 0 then
        print('[pearl-island] git pull 失敗，請確認 git 已安裝且 remote 可連線')
        return
    end

    print('[pearl-island] 更新完成，重啟 resource...')
    Wait(500)
    ExecuteCommand('restart ' .. RESOURCE)
end, true)

print('[pearl-island] 輸入 pi_update 可拉取最新版並重啟')
