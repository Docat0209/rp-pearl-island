local resName = GetCurrentResourceName()

local function registerApp()
    exports['lb-phone']:AddCustomApp({
        identifier  = 'pearl-island',
        name        = '珍珠島',
        description = '珍珠島 Pearl Island 官方資訊 — 豪宅、贊助車輛展示',
        icon        = 'https://cfx-nui-' .. resName .. '/ui/images/logo.png',
        ui          = resName .. '/ui/index.html',
        defaultApp  = true,
        fixBlur     = true,
    })
end

CreateThread(function()
    while not exports['lb-phone'] do
        Wait(500)
    end
    registerApp()
end)

AddEventHandler('onResourceStart', function(resource)
    if resource == 'lb-phone' then
        Wait(2000)
        registerApp()
    end
end)
