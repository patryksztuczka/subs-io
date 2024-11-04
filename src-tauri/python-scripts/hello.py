import whisper

model = whisper.load_model('medium')

def get_transcribe(audio: str, language: str = 'pl'):
    return model.transcribe(audio=audio, language=language, verbose=True)

print("Hello from Python! Starting transcription...")
result = get_transcribe(audio='./python-scripts/audio-1730738030730.mp3')
print('-'*50)
print(result.get('text', ''))