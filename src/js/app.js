import { Application } from '@splinetool/runtime';

const canvas = document.querySelector('canvas');
const spline = new Application(canvas);

spline.load(canvas.dataset.spline);