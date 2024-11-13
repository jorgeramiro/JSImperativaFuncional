import numpy as np
import matplotlib.pyplot as plt
import animatplot as amp
fig=plt.figure()
ax1=fig.add_subplot(1,1,1)
x=np.linspace(0,1,50)
t=np.linspace(0,1,20) 
x,t=np.meshgrid(x,t)
y=np.cos(2*np.pi*(x+t))
block=amp.blocks.Line(x,y,color="red")
anim_1=amp.Animation([block])
anim_1.controls()
# anim_1.save_gif("Grafica_Guardada.gif")
plt.suptitle("Gráfica Animada",fontsize=15)
plt.show()