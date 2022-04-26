# Навигация

Компонент `s-breadcrumb` позволяет создавать навигацию между страницами (хлебные крошки), добавляет индикацию текущей страницы.

### Как использовать
Т1


<s-breadcrumb>
    <s-breadcrumb-item active>Home</s-breadcrumb-item>
</s-breadcrumb>

<s-breadcrumb>
    <s-breadcrumb-item href="#">Home</s-breadcrumb-item>
    <s-breadcrumb-item href="#" active>Library</s-breadcrumb-item>
</s-breadcrumb>

<s-breadcrumb divider=">">
    <s-breadcrumb-item href="#">Home</s-breadcrumb-item>
    <s-breadcrumb-item href="#">Library</s-breadcrumb-item>
    <s-breadcrumb-item href="#" active>Data</s-breadcrumb-item>
</s-breadcrumb>

``` vue
Т1
```