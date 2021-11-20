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

class Login(tk.Tk):
    def __init__(master):
        super().__init__()
        master.logins = None
        w = 350
        h = 500
        ws = master.winfo_screenwidth()
        hs = master.winfo_screenheight()
        x = int(ws/2 - (w/2))
        y = int(hs/2 - (h/2))
        master.geometry('%dx%d+%d+%d' % (w,h,x,y))
        master.title(' L O G I N ')
        master.resizable(0, 0)
        master.get__frame_login()
    def get__frame_login(self):
        j = 0
        r = 10
        for i in range(100):
            c = str(222222 + r)
            self.login = tk.Frame(self, width=10, height=500, bg="#" + c).place(x=j, y=0)
            j = j + 10
            r = r + 1
        self.login2 = tk.Frame(self,width=250,height=400,bg='white').place(x=50,y=50)
        self.l1 = tk.Label(self, text='Username', bg='white')
        l = ('Consolas', 13)
        self.l1.config(font=l)
        self.l1.place(x=80, y=200)

        # e1 entry for username entry
        self.e1 = tk.Entry(self, width=20, border=0)
        l = ('Consolas', 13)
        self.e1.config(font=l)
        self.e1.place(x=80, y=230)

        # e2 entry for password entry
        self.e2 = tk.Entry(self, width=20, border=0, show='*')
        self.e2.config(font=l)
        self.e2.place(x=80, y=310)

        self.l2 = tk.Label(self, text='Password', bg='white')
        l = ('Consolas', 13)
        self.l2.config(font=l)
        self.l2.place(x=80, y=280)
        ###lineframe on entry

        self.frame3 = tk.Frame(self, width=180, height=2, bg='#141414').place(x=80, y=332)
        self.frame4 = tk.Frame(self, width=180, height=2, bg='#141414').place(x=80, y=252)


        self.imagea = Image.open("log.PNG")
        self.imageb = ImageTk.PhotoImage(self.imagea)

        self.label1 = tk.Label(image=self.imageb,
                       border=0,
                       justify=tk.CENTER)

        self.label1.place(x=115, y=50)
        self.bttn(100, 375, 'L O G I N', 'white', '#994422')

    #     # Command
    def cmd(self):
        global app
        if self.e1.get() == 'admin' and self.e2.get() == 'admin':
            messagebox.showinfo("LOGIN SUCCESSFULLY", "         W E L C O M E        ")
            app.destroy()
            app = APPMAIN()
            app.mainloop()

        else:
            messagebox.showwarning("LOGIN FAILED", "        PLEASE TRY AGAIN        ")

        # Button_with hover effect
    def bttn(self,x, y, text, ecolor, lcolor):
        def on_entera(e):
            myButton1['background'] = ecolor  # ffcc66
            myButton1['foreground'] = lcolor  # 000d33

        def on_leavea(e):
            myButton1['background'] = lcolor
            myButton1['foreground'] = ecolor

        myButton1 = tk.Button(self, text=text,
                           width=20,
                           height=2,
                           fg=ecolor,
                           border=0,
                           bg=lcolor,
                           activeforeground=lcolor,
                           activebackground=ecolor,
                           command=self.cmd)

        myButton1.bind("<Enter>", on_entera)
        myButton1.bind("<Leave>", on_leavea)

        myButton1.place(x=x, y=y)





#ham check id == INT ??

def check_id(id):
    try:
        id = int(id)
        return True
    except:
        return False
#ham check sdt
def check_sdt(sdt):
    if len(sdt) < 10 or len(sdt) > 16:
        return False
    return True
def chuyen_man_hinh_add_sv():
    app2 = App()
    luong_add = Thread(target=app2.mainloop())
    luong_add.start()
    # global app
    # app.destroy()
    # app = App()
    # app.mainloop()
class APPMAIN(tk.Tk):
    def __init__(self):
        super().__init__()
        self.sv = None
        self.contacts = []
        self.title("HỆ THỐNG NHẮC NHỞ ĐEO KHẨU TRANG")
        self.configure(bg='#f7e8c0')
        self.geometry("1600x800")
        self.label_phanmem = tk.Label(self, text="PHẦM MỀM NHẮC NHỞ ĐEO KHẨU TRANG", font=('Helvetica', 25,'bold'), bg = '#f7e8c0', fg='red')
        self.label_phanmem.grid(row=0, column=0, pady=30, padx=100)
        self.create_table_sv()

        self.create_find_sv()
        self.label_kq = None
        self.form_update = None
        self.create_frame_show_kq_detect()
    def update_one_sv(self):
        name = self.name_update_entry.get()
        lop = self.lop_update_entry.get()
        sdt = self.sdt_update_entry.get()
        update_sinhvien(self.id_find,name=name,lop=lop,sdt=sdt)
    def create_frame_show_kq_detect(self):
        self.show_kq_detect = ttk.Frame(self)
        self.label_kq_detect = ttk.Label(self.show_kq_detect, text="",font=('Helvetica', 16))
        self.label_kq_detect.grid(row=0, column=0)
        text_show = ""
        self.show_kqs = ttk.Label(self.show_kq_detect, text=text_show,font=('Helvetica', 12))
        self.show_kqs.grid(row=1, column=0)
        self.show_kq_detect.grid(row=4, column=0)
    def nhan_dien_khau_trang(self):
        luong_detect = Thread(target=self.detect_mask)

        luong_detect.start()