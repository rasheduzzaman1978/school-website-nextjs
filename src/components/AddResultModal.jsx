"use client";

import React from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

const AddResultModal = ({ addResultAction }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      await addResultAction(formData);
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  return (
    <Modal>
      <Button variant="secondary">
        ফলাফল যোগ করুন
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">

          <Modal.Dialog className="sm:max-w-2xl max-h-[90vh] overflow-hidden">

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>
                শিক্ষার্থীর ফলাফল
              </Modal.Heading>

              <p className="mt-1 text-sm text-muted">
                শিক্ষার্থীর পরীক্ষার তথ্য প্রদান করুন
              </p>
            </Modal.Header>

            <Modal.Body className="overflow-y-auto p-6">

              <Surface className="p-4">

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >

                  <TextField
                    name="studentId"
                    defaultValue="2025-1-KH-002"
                  >
                    <Label>শিক্ষার্থী আইডি</Label>
                    <Input />
                  </TextField>

                  <TextField
                    name="name"
                    defaultValue="সুরাইয়া ফাতেমা"
                  >
                    <Label>নাম</Label>
                    <Input />
                  </TextField>

                  <TextField
                    name="academicYear"
                    defaultValue="2025"
                  >
                    <Label>শিক্ষাবর্ষ</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField
                    name="class"
                    defaultValue="প্রথম"
                  >
                    <Label>শ্রেণি</Label>
                    <Input />
                  </TextField>

                  <TextField
                    name="section"
                    defaultValue="খ"
                  >
                    <Label>শাখা</Label>
                    <Input />
                  </TextField>

                  <TextField
                    name="examName"
                    defaultValue="১ম প্রান্তিক মূল্যায়ন"
                  >
                    <Label>পরীক্ষার নাম</Label>
                    <Input />
                  </TextField>

                  <TextField
                    name="environment"
                    defaultValue="50"
                  >
                    <Label>পরিবেশ</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField
                    name="bangla"
                    defaultValue="49"
                  >
                    <Label>বাংলা</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField
                    name="english"
                    defaultValue="48"
                  >
                    <Label>ইংরেজি</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField
                    name="math"
                    defaultValue="50"
                  >
                    <Label>গণিত</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField
                    name="religion"
                    defaultValue="35"
                  >
                    <Label>ধর্ম</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField
                    name="others"
                    defaultValue="140"
                  >
                    <Label>অন্যান্য</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField
                    name="total"
                    defaultValue="372"
                  >
                    <Label>মোট নম্বর</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField
                    name="position"
                    defaultValue="17"
                  >
                    <Label>মেধাক্রম</Label>
                    <Input type="number" />
                  </TextField>

                  <TextField
                    name="attendance"
                    defaultValue="উপস্থিত"
                  >
                    <Label>উপস্থিতি</Label>
                    <Input />
                  </TextField>

                  <div className="md:col-span-2 flex justify-end gap-3 mt-5">

                    <Button
                      slot="close"
                      type="button"
                      variant="secondary"
                    >
                      বাতিল
                    </Button>

                    <Button type="submit">
                      সংরক্ষণ করুন
                    </Button>

                  </div>

                </form>

              </Surface>

            </Modal.Body>

          </Modal.Dialog>

        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AddResultModal;