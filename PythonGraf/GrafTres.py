import numpy as np
import matplotlib.pyplot as plt
theta=np.linspace(0,2*np.pi,1000)
r=np.cos(3*theta)
plt.polar(theta,r,label='Gráfica Polar',linewidth=3,color="#1DE755")
plt.title('GRÁFICO 3')
plt.legend()
plt.show()