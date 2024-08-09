import five from '../assets/svg/projects/five.svg' 
import FruitDet from '../assets/svg/projects/FruitDet.svg' 
import PlagiarismDet from '../assets/svg/projects/PlagiarismDet.svg' 
import TodoList from '../assets/svg/projects/TodoList.svg' 
import agriculture from '../assets/svg/projects/Agriculture.svg'
import Medical from '../assets/svg/projects/Medical.svg' 
import MedicalAuto from '../assets/svg/projects/MedicalAuto.PNG'
import AmusementPark from '../assets/svg/projects/amusementPark.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Medscan',
        projectDesc: 'Multiple disease prediction project (Heart, diabetes and parkinsons disease)',
        tags: ['Streamlit', 'Machine Learning', 'Python'],
        code: 'https://github.com/Wisteriaa9/MedScan',
        demo: 'https://github.com/Wisteriaa9/MedScan',
        image: Medical
    },
    {
        id: 2,
        projectName: 'Agriculture Webapp',
        projectDesc: 'A technology solution that enables seamless coordination and visibility among the stakeholders involved in the agricultural value chain.',
        tags: ['ReactJS','NodeJS','MongoDB', 'Tailwind CSS'],
        code: 'https://github.com/Wisteriaa9/Agriculture-Webapp',
        demo: 'https://github.com/Wisteriaa9/Agriculture-Webapp',
        image: agriculture
    },
    {
        id: 3,
        projectName: 'Dealio',
        projectDesc: 'E-commerce website that focuses on the frontend components, ensuring user-friendly and responsive website',
        tags: ['React', 'CSS', 'HTML','Javascript'],
        code: 'https://github.com/Wisteriaa9/E-commerce',
        demo: 'https://github.com/Wisteriaa9/E-commerce',
        image: five
    },
    {
        id: 4,
        projectName: 'Plagiarism Detector',
        projectDesc: 'The outcome is that we can compare two text documents as well as two image files.',
        tags: ['Python','Google Colab'],
        code: 'https://github.com/Wisteriaa9/Plagiarism-Detector',
        demo: 'https://github.com/Wisteriaa9/Plagiarism-Detector',
        image: PlagiarismDet
    },
    {
        id: 5,
        projectName: 'Fruit Detection System',
        projectDesc: 'Fruits detection using color segmentation method in Matlab (Computer Vision) Code to detect plot different fruits in 1 picture. ',
        tags: ['MATLAB'],
        code: 'https://github.com/Wisteriaa9/Fruit-Detection-MATLAB',
        demo: 'https://github.com/Wisteriaa9/Fruit-Detection-MATLAB',
        image: FruitDet
    },
    {
        id: 6,
        projectName: 'OneHealth Test Automated Site ',
        projectDesc: 'It automates and optimizes quality assurance for healthcare websites, ensuring reliability and efficiency. ',
        tags: ['Java','Selenium Framework', 'TestNg Framework'],
        code: 'https://github.com/Wisteriaa9/TestAutomation-Healthcare-Website',
        demo: 'https://github.com/Wisteriaa9/TestAutomation-Healthcare-Website',
        image: MedicalAuto
    },
    {
        id: 7,
        projectName: '3D Amusement Park Simulation using OpenGL',
        projectDesc: 'It features interactive functionalities like dynamic rendering, user controls, and immersive visual experiences. ',
        tags: ['Glut','OpenGL','C/C++'],
        code: 'https://github.com/Wisteriaa9/3D-AmusementPark-Glut',
        demo: 'https://github.com/Wisteriaa9/3D-AmusementPark-Glut',
        image: AmusementPark
    },
    {
        id: 8,
        projectName: 'Todo List',
        projectDesc: 'The application allows users to manage their tasks by adding new items and deleting completed ones. ',
        tags: ['Node JS','CSS','Express Framework'],
        code: 'https://github.com/Wisteriaa9/Todo_List',
        demo: 'https://github.com/Wisteriaa9/Todo_List',
        image: TodoList
    },

    
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/