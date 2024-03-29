# Manjaro Hyprland Edition

## Projects

1. [Manjaro Hyprland](https://github.com/manjaro-hyprland/manjaro-hyprland)
2. [Manjaro Desktop Settings](https://github.com/manjaro-hyprland/desktop-settings)
3. [Manjaro ISO Profiles](https://github.com/manjaro-hyprland/iso-profiles)
4. [Manjaro Hyprland Settings](https://github.com/manjaro-hyprland/manjaro-hyprland-settings)
5. [Manjaro Hyprland Settings Git](https://github.com/manjaro-hyprland/manjaro-hyprland-settings-git)


## Develop

1. 手动或周期触发 [Manjaro Desktop Settings](https://github.com/manjaro-hyprland/desktop-settings) `rebase.yaml` action，会rebase上游代码

2. 发布版本时、手动触发或者推送代码到`hyprland`分支，以触发[Manjaro Desktop Settings](https://github.com/manjaro-hyprland/desktop-settings) `trigger_pkgbuild.yaml` action，接着会发送`source_update`事件给[Manjaro Hyprland Settings](https://github.com/manjaro-hyprland/manjaro-hyprland-settings)和[Manjaro Hyprland Settings Git](https://github.com/manjaro-hyprland/manjaro-hyprland-settings-git)

3. 收到`source_update`事件后，[Manjaro Hyprland Settings](https://github.com/manjaro-hyprland/manjaro-hyprland-settings)和[Manjaro Hyprland Settings Git](https://github.com/manjaro-hyprland/manjaro-hyprland-settings-git)会触发`set-version.yml` action，接着自动push代码，然后触发`pkgbuild.yml` action和`submit.yml` action

4. 手动/**自动**更新[Manjaro Hyprland](https://github.com/manjaro-hyprland/manjaro-hyprland)网站，刷新资源

5. [Manjaro Hyprland](https://github.com/manjaro-hyprland/manjaro-hyprland)周期性或者手动触发`iso_profile_update`事件

6. 推送代码到[Manjaro ISO Profiles](https://github.com/manjaro-hyprland/iso-profiles)的`hyprland`分支，或者手动触发 `trigger.yaml` action，会rebase上游代码，然后分发`iso_profile_update`事件

7. 收到`iso_profile_update`事件或者手动触发或者周期触发，[Manjaro ISO Profiles](https://github.com/manjaro-hyprland/iso-profiles)会执行最终的系统构建与发布

### How to update a feature

1. 更新Settings和Settings-git代码【如果无需求，则跳过】
2. 手动触发desktop 的 rebase.yml 【如果最新，则跳过】
3. 触发 `trigger_pkgbuild.yaml` 【push代码到desktop 的 hyprland 分支】
4. 触发`set-version.yml` action 【由上一步自动触发】
5. 最后更新iso-profile
6. 
7. 提交a, c, b
8. 
