import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python Programming 2",
  description: "Course and Labs Informations",
  base: '/Python-Programming-2/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }] // Updated href
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Lab Report',
        items: [
          { text: 'Lab Test 1', link: '/assessments/lab-test-1' },
          { text: 'Lab Test 2', link: '/assessments/lab-test-2' },
          { text: 'Lab Test 3', link: '/assessments/lab-test-3' },
          { text: 'Assignment', link: '/assessments/assignment' },
          { text: 'Check Marks', link: '/assessments/marks' }
        ],
        activeMatch: '^/assessments/'
      },
      {
        text: 'Course Informations',
        items: [
          { text: 'Assessments', link: '/course/course' },
          { text: 'Schedule', link: '/course/schedule' },
        ],
        activeMatch: '^/course/'
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Functions', link: '/tutorials/chapter-functions-tutorial-1' },
          { text: 'Lists', link: '/tutorials/chapter-lists-tutorial-1' },
          { text: 'Tuples', link: '/tutorials/chapter-tuples-tutorial-1' },
          { text: 'Sets', link: '/tutorials/chapter-sets-tutorial-1' },
          { text: 'Dictionaries', link: '/tutorials/chapter-dictionaries-tutorial-1' },
          { text: 'Combined Data Structures', link: '/tutorials/chapter-mixed-datastructures-tutorial-1' },
          { text: 'Files', link: '/tutorials/chapter-files-tutorial-1' },
          { text: 'DataFrame & Data Analysis', link: '/tutorials/chapter-dataframe-tutorial-1' }
        ],
        activeMatch: '^/tutorials/'
      },
      {
        text: 'Labs',
        items: [
          { text: 'Installation', link: '/labs/installation' },
          { text: 'Lab 1', link: '/labs/lab-01' },
          { text: 'Lab 2', link: '/labs/lab-02' },
          { text: 'Lab 3', link: '/labs/lab-03' },
          { text: 'Lab 4', link: '/labs/lab-04' },
          { text: 'Lab 5', link: '/labs/lab-05' },
          { text: 'Lab 6', link: '/labs/lab-06' },
          { text: 'Lab 7', link: '/labs/lab-07' },
          { text: 'Lab 8', link: '/labs/lab-08' },
          { text: 'Lab 9', link: '/labs/lab-09' },
          // { text: 'Lab 10', link: '/labs/lab-10' },
          // { text: 'Lab 11', link: '/labs/lab-11' },
          // { text: 'Lab 12', link: '/labs/lab-12' },
          // { text: 'Lab 13', link: '/labs/lab-13' }
        ],
        activeMatch: '^/labs/'
      },
      {
        text: 'Lectures',
        items: [
          { text: 'Chapter 1', link: '/lectures/chapter-01' },
          { text: 'Chapter 2', link: '/lectures/chapter-02' },
          { text: 'Chapter 3', link: '/lectures/chapter-03' },
          { text: 'Chapter 4', link: '/lectures/chapter-04' },
          { text: 'Chapter 5', link: '/lectures/chapter-05' },
          { text: 'Chapter 6', link: '/lectures/chapter-06' },
        ],
        activeMatch: '^/lectures/'
      },
      /*
      {
        text: 'Exams',
        link: '/exams/',
        activeMatch: '^/exams/'
      },
      */
    ],

    sidebar: {
      '/assessments/': [
        {
          text: 'Lab Test 1',
          link: '/assessments/lab-test-1'
        },
        {
          text: 'Lab Test 2',
          link: '/assessments/lab-test-2'
        },
        {
          text: 'Lab Test 3',
          link: '/assessments/lab-test-3'
        },
        {
          text: 'Assignment',
          link: '/assessments/assignment'
        },
        {
          text: 'Check Marks',
          link: '/assessments/marks'
        }
      ],
      '/labs/': [
        {
          text: 'Installation',
          link: '/labs/installation'
        },
        {
          text: 'Lab 1',
          link: '/test/lab-01'
        },
        {
          text: 'Lab 2',
          link: '/labs/lab-02'
        },
        {
          text: 'Lab 3',
          link: '/labs/lab-03'
        },
        {
          text: 'Lab 4',
          link: '/labs/lab-04'
        },
        {
          text: 'Lab 5',
          link: '/labs/lab-05'
        },
        {
          text: 'Lab 6',
          link: '/labs/lab-06'
        },
        {
          text: 'Lab 7',
          link: '/labs/lab-07'
        },
        {
          text: 'Lab 8',
          link: '/labs/lab-08'
        },
        {
          text: 'Lab 9',
          link: '/labs/lab-09'
        }
      ],

      '/course/': [
        {
          text: 'Assessments',
          link: '/course/course'
        },
        {
          text: 'Schedule',
          link: '/course/schedule'
        },
      ],

      '/lectures/': [
        {
          text: 'Chapter 1',
          link: '/lectures/chapter-01'
        },
        {
          text: 'Chapter 2',
          link: '/lectures/chapter-02'
        },
        {
          text: 'Chapter 3',
          link: '/lectures/chapter-03'
        },
        {
          text: 'Chapter 4',
          link: '/lectures/chapter-04'
        },
        {
          text: 'Chapter 5',
          link: '/lectures/chapter-05'
        },
        {
          text: 'Chapter 6',
          link: '/lectures/chapter-06'
        },
      ],

      '/tutorials/': [
        {
          text: 'Functions',
          link: '/tutorials/chapter-functions-tutorial-1'
        },
        {
          text: 'Lists',
          link: '/tutorials/chapter-lists-tutorial-1'
        },
        {
          text: 'Tuples',
          link: '/tutorials/chapter-tuples-tutorial-1'
        },
        {
          text: 'Sets',
          link: '/tutorials/chapter-sets-tutorial-1'
        },
        {
          text: 'Dictionaries',
          link: '/tutorials/chapter-dictionaries-tutorial-1'
        },
        {
          text: 'Combined Data Structures',
          link: '/tutorials/chapter-mixed-datastructures-tutorial-1'
        },
        {
          text: 'Files',
          link: '/tutorials/chapter-files-tutorial-1'
        },
        {
          text: 'DataFrame & Data Analysis',
          link: '/tutorials/chapter-dataframe-tutorial-1'
        }
      ],

      /*
      '/exams/': [
        {
          text: 'Sample Question',
          link: '/exams/#sample-question'
        },
        {
          text: 'Sample Question Answer',
          link: '/exams/#sample-question-answer'
        },
        {
          text: 'Exam 1',
          link: '/exams/#exam-1'
        },
        {
          text: 'Exam 2',
          link: '/exams/#exam-2'
        },
        {
          text: 'Exam 3',
          link: '/exams/#exam-3'
        },
        {
          text: 'Exam 4',
          link: '/exams/#exam-4'
        },
        {
          text: 'Exam 5',
          link: '/exams/#exam-5'
        },
        {
          text: 'Exam 6',
          link: '/exams/#exam-6'
        },
        {
          text: 'Exam 7',
          link: '/exams/#exam-7'
        },
        {
          text: 'Skema KMK Pra-PSPM 25/26',
          link: '/exams/#skema-kmk-pra-pspm-25-26'
        }
      ]
      */
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/JSK-KML/CP125-Class-Repo'
      }
    ],

    footer: {
      message: 'Released under the MIT License. All rights reserved.',
      copyright: 'Copyright © 2025-Present Muhammad Aiman Haris'
    },

    search: {
      provider: 'local'
    }
  }
})
