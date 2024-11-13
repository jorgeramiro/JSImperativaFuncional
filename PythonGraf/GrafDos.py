import numpy as np
import matplotlib.pyplot as plt
x=np.arange(-10,10,0.5)
y=x*np.sin(x)
plt.plot(x,y)
plt.xlabel('Abcisa')
plt.ylabel('y = x^sin(x)')
plt.title('GRÁFICA 2')
plt.show()