# 1. 解坑

## 1.1. 目录

<!-- TOC -->

- [1. 解坑](#1-解坑)
    - [1.1. 目录](#11-目录)
    - [1.2. 结果拦截器](#12-结果拦截器)
    - [1.3. 注册模块里的通用仓储](#13-注册模块里的通用仓储)
    - [1.4. 全局修改DateTimeFromat](#14-全局修改datetimefromat)

<!-- /TOC -->

## 1.2. 结果拦截器

在ABP有时候需要直接输出Stream,譬如微信的回调.

[DontWrapResult]

在控制器 或者动态api的方法上加上这个拦截器.

```c#
[DontWrapResult]
public void Test2()
{
    var respbyte = Encoding.UTF8.GetByt("<xml>abccccc</xml>");
    //contextAccessor.HttpContext.Response.Body.EndWri(stream.WriteAsync(respbyte, 0, respbyte.Length));
    Response.Body.Write(respbyte, 0, respbyte.Length);
}
```

## 1.3. 注册模块里的通用仓储

查看modules 里的RegisterGenericRepositoriesAndMatchDbContexes 函数

```c#
/// <summary>
/// 注册通用仓储IRepository<>
/// </summary>
private void RegisterGenericRepositoriesAndMatchDbContexes()
{
    var dbContextTypes =
        _typeFinder.Find(type =>
        {
            var typeInfo = type.GetTypeInfo();
            return typeInfo.IsPublic &&
                   !typeInfo.IsAbstract &&
                   typeInfo.IsClass &&
                   typeof(AbpDbContext).IsAssignableFrom(type);
        });
    if (dbContextTypes.IsNullOrEmpty())
    {
        Logger.Warn("No class found derived from AbpDbContext.");
        return;
    }
    using (IScopedIocResolver scope = IocManager.CreateScope())
    {
        foreach (var dbContextType in dbContextTypes)
        {
            Logger.Debug("Registering DbContext: " + dbContextType.AssemblyQualifiedName);
            var re = scope.Resolve<ITestEfGenericRepositoryRegistrar>();//搭完后移除
            re.RegisterForDbContext(dbContextType, IocManager, EfCoreAutoRepositoryTypes.Default);
            IocManager.IocContainer.Register(
                Component.For<ISecondaryOrmRegistrar>()
                    .Named(Guid.NewGuid().ToString("N"))
                    .Instance(new EfCoreBasedSecondaryOrmRegistrar(dbContextType, scope.Resolve<IDbContextEntityFinder>()))
                    .LifestyleTransient()
            );
        }
        scope.Resolve<IDbContextTypeMatcher>().Populate(dbContextTypes);
    }
}
```

然后在Modules 的Initialize函数里使用这个函数

```c#
public override void Initialize()
{
    var ass = typeof(LegoAbpEntityFrameworkCoreModule).GetAssembly();
    IocManager.RegisterAssemblyByConvention(ass);
    RegisterGenericRepositoriesAndMatchDbContexes();
}
```

## 1.4. 全局修改DateTimeFromat

在Module里加上这个配置

```c#
 Configuration.Modules.AbpAspNetCore().UseMvcDateTimeFormatForAppServices = true;
```