## 解决子级用css float浮动导致div不能自适应高度的问题

```html
.clear{ clear:both}
<div class='father'>
    <div style='float:left'>
    </div>
    <div class='clear'>
    </div>
</div>
```

在子级元素最后添加class为clear的div