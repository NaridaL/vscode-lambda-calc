use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
	pub fn alert(s: &str);
}

#[wasm_bindgen(module = vscode)]
extern "C" {
	#[wasm_bindgen(js_namespace = window)]
	pub fn showInformationMessage(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
	showInformationMessage(&format!("Hello, {}!", name));
}
