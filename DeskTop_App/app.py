import tkinter as tk
from tkinter import ttk,messagebox
from tkinter.constants import CENTER, LEFT
from PIL import ImageTk, Image
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
def get_time():
    now = datetime.now()

    now = str(now).split(" ")
    key1 = "".join(now[0].split("-"))
    key2 = "".join(now[1].split(":")).split(".")[0]
    key = key1 + key2
    return key