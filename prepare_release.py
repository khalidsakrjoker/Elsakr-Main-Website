import os
import zipfile

def zipdir(path, ziph):
    # Files/Folders to exclude
    EXCLUDE_DIRS = {'node_modules', '.git', 'dist', '.vscode', '.idea', 'logs', 'temp_release'}
    EXCLUDE_FILES = {'.env.local', '.env', '.DS_Store', 'package-lock.json', 'yarn.lock', 'prepare_release.py'}
    EXCLUDE_EXTENSIONS = {'.rar', '.zip', '.7z', '.log', '.tar', '.gz'}

    for root, dirs, files in os.walk(path):
        # Modify dirs in-place to skip excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in files:
            if file in EXCLUDE_FILES:
                continue
            if any(file.endswith(ext) for ext in EXCLUDE_EXTENSIONS):
                continue
                
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, path)
            print(f"Adding: {arcname}")
            ziph.write(file_path, arcname)

if __name__ == '__main__':
    zip_filename = 'Elsakr_Main_Website_Source.zip'
    with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        zipdir('.', zipf)
    print(f"Successfully created {zip_filename}")
