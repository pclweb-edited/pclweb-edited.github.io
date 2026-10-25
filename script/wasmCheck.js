function WASMEnable(){
    
    if (!("WebAssembly" in window) || !WebAssembly.Function) {
    // 提示用户：当前浏览器不支持 WASM 版，建议换电脑或使用 JS 版客户端
        return 0;
    }
    return 1;
}
if(WASMEnable()==0){
    document.getElementById("wasm-warning")
        .innerHTML = "该设备不支持 WASM,部分版本将<span style='color:red;'>无法</span>运行，请换一台设备";
}