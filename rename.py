import os

loc = "/Users/nuthanc/Desktop/FAANG/26toLast/Appendix Big O" 
for filename in os.listdir(loc):
    name, i_with_ext = filename.split("(")
    index, ext = i_with_ext.split(")")
    dst = f'{index}.{name}{ext}'
    src = f'{loc}/{filename}' 
    dst = f'{loc}/{dst}' 
    os.rename(src, dst)
