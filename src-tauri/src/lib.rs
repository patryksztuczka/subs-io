use std::process::Command;
use std::time::{SystemTime, UNIX_EPOCH};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command(rename_all = "snake_case")]
fn extract_audio(file_path: &str) {
    println!("File path: {}", file_path);
    let start = SystemTime::now();

    let since_the_epoch = start
        .duration_since(UNIX_EPOCH)
        .expect("Time went backwards")
        .as_millis();

    let output_file = format!("./audio-tracks/audio-{}.mp3", since_the_epoch);

    let _output = Command::new("ffmpeg")
        .arg("-i")
        .arg(file_path)
        .arg("-vn")
        .arg("-y")
        .arg(output_file)
        .spawn()
        .expect("ffmpeg command failed to start");

    // println!("status: {}", output.status);
    // println!("stdout: {}", String::from_utf8_lossy(&output.stdout));
    // println!("stderr: {}", String::from_utf8_lossy(&output.stderr));
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, extract_audio])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
