// 'use client'

// import React from 'react'
// import { FileText, Download } from 'lucide-react'
// import { motion } from 'framer-motion'
// import  Button  from '../ui/Button'
// interface DownloadCardProps {
//   title: string
//   type: string
//   size: string
// }
// export function DownloadCard({ title, type, size }: DownloadCardProps) {
//   return (
//     <motion.div
//       whileHover={{
//         y: -5,
//       }}
//       className="bg-white p-6 rounded-xl border border-gray-200 hover:border-biotech-gold/30 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
//     >
//       <div className="p-3 bg-biotech-green/10 rounded-lg">
//         <FileText className="w-8 h-8 text-biotech-green" />
//       </div>
//       <div className="flex-1">
//         <h4 className="font-semibold text-gray-900 mb-1 font-poppins">{title}</h4>
//         <p className="text-xs text-gray-500 mb-4 font-lato">
//           {type} • {size}
//         </p>
//         <Button
//           variant="outline"
//           size="sm"
//           className="w-full sm:w-auto"
//           leftIcon={<Download className="w-3 h-3" />}
//         >
//           Download PDF
//         </Button>
//       </div>
//     </motion.div>
//   )
// }
