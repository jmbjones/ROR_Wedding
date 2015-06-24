# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140304015111) do

  create_table "rsvp_access_attempts", force: true do |t|
    t.string   "remote_ip"
    t.integer  "failed_attempts", default: 0
    t.datetime "locked_until"
    t.integer  "locks_incurred",  default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rsvp_families", force: true do |t|
    t.string   "salutation_type", limit: 50
    t.string   "salutation"
    t.string   "street_1",        limit: 75
    t.string   "street_2",        limit: 75
    t.string   "city",            limit: 50
    t.string   "state",           limit: 25
    t.string   "postal_code",     limit: 15
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rsvp_invitations", force: true do |t|
    t.integer  "family_id"
    t.string   "salutation_type", limit: 50
    t.string   "salutation"
    t.string   "rsvp_code",       limit: 20
    t.integer  "total_invited"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "rsvp_invitations", ["rsvp_code"], name: "index_rsvp_invitations_on_rsvp_code", unique: true

  create_table "rsvp_members", force: true do |t|
    t.integer  "family_id"
    t.integer  "person_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rsvp_people", force: true do |t|
    t.string   "gender_type", limit: 50
    t.string   "first_name",  limit: 50
    t.string   "last_name",   limit: 50
    t.string   "suffix",      limit: 15
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rsvp_responses", force: true do |t|
    t.integer  "invitation_id"
    t.string   "email",           limit: 50
    t.integer  "total_attending"
    t.text     "comment"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
