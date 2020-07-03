from PIL import Image
import glob
from os.path import splitext

imgs = glob.glob('./Kaguya Noises/imgs/*')
new_width = 300

for img in imgs:

    filename, extention = splitext(img)
    print(filename, extention)

    img = Image.open(img)
    width, height = img.size
    new_height = int((height/width)*new_width)
    img = img.resize((new_width, new_height))

    img.save(f'{filename}_resized{extention}')
