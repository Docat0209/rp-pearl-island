-- 等 lb-phone 載入後再註冊 app
CreateThread(function()
    while not exports['lb-phone'] do
        Wait(500)
    end

    exports['lb-phone']:AddCustomApp({
        identifier  = 'pearl-island',
        name        = '珍珠島',
        description = '珍珠島 Pearl Island 官方資訊 — 豪宅、贊助車輛展示',
        icon        = 'nui://pearl-island-app/ui/images/logo.png',
        ui          = 'pearl-island-app/ui/index.html',
        defaultApp  = true,
    })
end)
