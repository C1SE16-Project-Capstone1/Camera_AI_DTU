    import tkinter as tk
from tkinter import ttk,messagebox
from tkinter.constants import LEFT
from PIL import ImageTk, Image
from sqlalchemy.sql.expression import column, label
import cv2
from random import randrange
import os
from camera import MyVideoCapture
import test_train
from datetime import datetime
from threading import Thread
from database import get_so_lan_vi_pham,del_all_vipham,sv,engine,metadata,check_sinhvien,update_sinhvien,del_sinhvien,add_sinhvien,get_sinhhvien,del_all_sv,get_one_sv,get_ds_vi_pham,check_vi_pham_hop_le
import shutil
#Folder Dataset
FOLDER = "dataset/"
import time
    
class APPMAIN(tk.Tk):
    def updates(self):
        self.rows = get_sinhhvien()
        for i in self.tree.get_children():
            self.tree.delete(i)
        for row in self.rows:
            self.tree.insert('', tk.END, values=[row[0], row[1], row[2], row[3]])
        self.table.update()