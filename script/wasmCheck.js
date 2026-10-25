function WASMEnable() {
    return typeof WebAssembly === "object"
        && typeof WebAssembly.instantiate === "function"
        && typeof WebAssembly.Module === "function";
}

if (!WASMEnable()) {
    const el = document.getElementById("wasm-warning");
    if (el) {
        el.textContent = "该设备不支持 WebAssembly，部分版本将无法运行，请换一台设备";
        // 若需要红色高亮，用 class 控制样式，而不是内联 style
    }
}